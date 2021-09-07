/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react';

interface IProps {
	src: string;
	height: number;
	width: number;
	preload?: boolean;
	scrollChecker?: any;
}

const allImages: any[] = [];

const imageLoad = ({ src, height, width, preload, scrollChecker }: IProps) => {
	const [LOAD_NOW, setLOAD_NOW] = useState(false);
	const imageContent = useRef<HTMLDivElement>(null);

	useEffect(() => {
		allImages.push(imageContent);
	}, []);

	useEffect(() => {
		if (scrollChecker === src) {
			setLOAD_NOW(true);
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
			className="image-wrap image-lazy-load"
			data-source={src}
			ref={imageContent}
			style={{ height: `${height}px`, width: `${width}px` }}
		>
			{LOAD_NOW && <img src={src} alt="sponsor1" height={`${height}px`} width={`${width}px`} />}
		</div>
	);
};

export default imageLoad;

export const useImageScrolling = () => {
	const [scrollCheckState, setScrollCheckState] = React.useState<any>('');
	const autoLoad = true;
	let lastIndexImageLoaded = 0;
	const refContentScroll: React.MutableRefObject<{
		contentHeight: number;
		windowInnerHeight: number;
	}> = useRef({
		contentHeight: 0,
		windowInnerHeight: 0,
	});
	const updateCheck = (imagsrc: any) => {
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
					console.log('acabou');
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
