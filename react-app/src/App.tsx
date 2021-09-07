/* eslint-disable operator-linebreak */
// import { useEffect } from 'react';
import ImageLoad, { useImageScrolling } from './components/ImageLoad';
// import { IMG_SPONSORS } from './images';

import './App.css';

function App() {
	const scrollChecker = useImageScrolling();

	return (
		<div>
			<h1>Imagem</h1>
			<pre>{scrollChecker}</pre>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>

			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/01.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/02.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/06.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/07.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/08.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<p>
				RIVER xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem
				incidunt, quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae
				ducimus in, expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero
				exercitationem ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt
				veritatis repellat laudantium officiis temporibus ea! Nam praesentium consequuntur
				necessitatibus, odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum
				itaque reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi.
				Neque recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque
				provident nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut
				labore fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/03.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/04.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<p>
				xLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatem incidunt,
				quibusdam quam vero rem cupiditate? Unde, dolorum? Veritatis porro repudiandae ducimus in,
				expedita molestiae voluptatibus quibusdam corporis iusto consequuntur vero exercitationem
				ipsam hic sunt similique. Quia voluptatem sapiente ipsam. Eaque amet incidunt veritatis
				repellat laudantium officiis temporibus ea! Nam praesentium consequuntur necessitatibus,
				odit ut autem tenetur distinctio placeat modi voluptatibus omnis sed dolorum itaque
				reiciendis saepe error excepturi tempore eaque rerum, doloremque fugit culpa nisi. Neque
				recusandae alias itaque aliquam, suscipit tempora eum doloremque distinctio, eaque provident
				nam reiciendis accusantium fugit laudantium maxime ipsam laboriosam tempore ut labore
				fugiat!
			</p>
			<ImageLoad
				src="https://media.fromsoftware.jp/eldenring/resources/images/movieandimages/screenshot/4k/05.jpg"
				height={100}
				width={150}
				preload
				scrollChecker={scrollChecker}
			/>
		</div>
	);
}

export default App;
