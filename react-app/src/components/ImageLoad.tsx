/* eslint-disable operator-linebreak */
import React, { useEffect, useRef, useState } from 'react';
import { install } from 'resize-observer';

import './ImageLoad.css';

if (!window.ResizeObserver) install();

interface IProps {
	src: string;
	height?: number;
	width?: number;
	preload?: boolean;
	customClass?: string;
	scrollChecker?: string;
	background?: boolean;
	children?: React.ReactNode;
}

const allImages: any[] = [];

const imageLoad = ({
	src,
	height,
	width,
	preload,
	scrollChecker,
	background,
	children,
	customClass,
}: IProps) => {
	const [currentLoad, setCurrentLoad] = useState(preload);
	const imageContent = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollChecker !== undefined) {
			allImages.push(imageContent);
		}
	}, []);

	useEffect(() => {
		if (scrollChecker === src || scrollChecker === undefined) {
			setCurrentLoad(true);
			const newImage = new Image();
			newImage.src = src;

			if (imageContent.current !== null) {
				imageContent.current.classList.add('image-lazy-loading');
			}
			newImage.onload = () => {
				if (imageContent.current !== null) {
					imageContent.current.classList.remove('image-lazy-loading');
					imageContent.current.classList.remove('image-lazy-load');
				}
			};
		}
	}, [scrollChecker]);

	return (
		<div
			className={`image-wrap image-lazy-load ${customClass && customClass}`}
			data-source={src}
			ref={imageContent}
			style={{ height: `${height}px`, width: `${width}px` }}
		>
			<div className="image-wrap-load">
				{currentLoad &&
					(background ? (
						<>{background && children}</>
					) : (
						<img
							src={src}
							alt="imagem loaded"
							height={`${height}px`}
							width={`${width}px`}
							className={customClass && customClass}
						/>
					))}
			</div>
		</div>
	);
};
export default imageLoad;

export const useImageScrolling = () => {
	const [scrollCheckState, setScrollCheckState] = React.useState<string>('');
	const autoLoad = true;
	let lastIndexImageLoaded = 0;
	const refContentScroll: React.MutableRefObject<{
		contentHeight: number;
		windowInnerHeight: number;
	}> = useRef({
		contentHeight: 0,
		windowInnerHeight: 0,
	});
	const updateCheck = (imagsrc: string) => {
		setScrollCheckState(imagsrc);
	};

	useEffect(() => {
		const handleBind = () => {
			if (allImages.length > 0) {
				const contentScrollBox: Element | null = allImages[lastIndexImageLoaded].current;

				if (autoLoad && contentScrollBox !== null) {
					if (contentScrollBox instanceof HTMLElement) {
						// create an Observer instance
						const resizeObserver = new ResizeObserver(() => {
							refContentScroll.current = {
								...refContentScroll.current,
								contentHeight: contentScrollBox?.scrollHeight + contentScrollBox?.offsetTop,
								windowInnerHeight: window?.innerHeight,
							};
						});
						// start observing a DOM node
						resizeObserver.observe(document.body);
					}
				}
			}
		};

		const scrolling = () => {
			let windowTopScroll = 0;

			if (window !== undefined) {
				windowTopScroll = window.pageYOffset;
			}

			if (
				refContentScroll.current.windowInnerHeight + windowTopScroll >
				refContentScroll.current.contentHeight
			) {
				const imgLoadedSrc = allImages[lastIndexImageLoaded].current.dataset.source;
				updateCheck(imgLoadedSrc);

				if (lastIndexImageLoaded < allImages.length - 1) {
					lastIndexImageLoaded += 1;
					handleBind();
				} else {
					window.removeEventListener('scroll', scrolling, false);
				}
			}
		};

		handleBind();

		if (allImages.length > 0) {
			window.addEventListener('scroll', scrolling, false);
		}

		return () => {
			window.removeEventListener('scroll', scrolling);
		};
	}, [allImages]);

	return scrollCheckState;
};
