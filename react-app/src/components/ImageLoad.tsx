/* eslint-disable operator-linebreak */
import React, { useEffect, useRef } from 'react';

interface IProps {
	src: string;
	height: number;
	width: number;
	preload?: boolean;
}

const allImages: any[] = [];

const imageLoad = ({ src, height, width, preload }: IProps) => {
	const imageContent = useRef<HTMLDivElement>(null);
	const LOAD_NOW = true;

	useEffect(() => {
		console.log('romero', preload, allImages);
		if (LOAD_NOW) {
			const newImage = new Image();
			newImage.src = src;
			allImages.push(imageContent);
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
	}, []);

	return (
		<div className="image-wrap image-lazy-load" ref={imageContent}>
			<p>{allImages.length}</p>
			{preload && <img src={src} alt="sponsor1" height={`${height}px`} width={`${width}px`} />}
		</div>
	);
};

export default imageLoad;

export const useImageScrolling = () => {
	const autoLoad = true;
	const refContentScroll: React.MutableRefObject<{
		contentHeight: number;
		windowInnerHeight: number;
	}> = useRef({
		contentHeight: 0,
		windowInnerHeight: 0,
	});

	useEffect(() => {
		const handleBind = () => {
			if (allImages.length > 0) {
				const contentScrollBox: Element | null = allImages[0].current;

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
				console.log('chegou', allImages[0].current);
				allImages.shift();

				if (allImages.length === 0) {
					window.removeEventListener('scroll', scrolling, false);
					console.log('acabou');
				} else {
					handleBind();
				}
			}
		};

		handleBind();

		if (allImages.length > 0) {
			window.addEventListener('scroll', scrolling, false);
			console.log('add ');
		}

		return () => {
			window.removeEventListener('scroll', scrolling);
		};
	}, [allImages]);
};
