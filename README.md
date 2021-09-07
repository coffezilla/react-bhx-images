# react-bhx-images

React BHX images it's a component to deal with images in your React app. You can use this to preload images, preload background and fadein images only when it shows up using scroll. 

## Feat

- Pre-load images
- Pre-load image as background
- fade-in images using scroll
- Load image only when scrolls or preload and fade when scrolls
- loading placeholder images
- Pre-load external image
- Pre-load internal images

## Options

Not all properties are mandatory.

```tsx
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
```

### src

The source of the image

### height x width

height and width of the content. not required but it's required if you need to have a placeholder to save the location before loading.

### preload

default value: false

If it's true, the image is loaded before scrolling

### customClass

A new class to the image

### scrollChecker

the scrollChecker it's a function that receive the state to control which image needs to bind the scroll event.

```tsx
// import the useImageScrolling
import ImageLoad, { useImageScrolling } from './components/ImageLoad';

// put it in some const
const scrollChecker = useImageScrolling();

// define
<ImageLoad
		src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/02.jpg"
		height={100}
		width={150}
		scrollChecker={scrollChecker}
	/>
```

### background

If you defined use this prop it means that the content is not a image but a background of something instead.

The content use the image to save the preload content and you can set it into something inside the component as children

```tsx
<ImageLoad
	src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/01.jpg"
	height={200}
	width={250}
	background
>
	<div
		className="background-sample"
		style={{
			backgroundImage:
				'url(https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/01.jpg)',
		}}
	>
		<p>IMAGE AS BACKGROUND</p>
	</div>
</ImageLoad>
```

## Example

![preaload.gif](react-bhx-images%2063c1a15a1b50450287b0de1aa9aca1a7/preaload.gif)