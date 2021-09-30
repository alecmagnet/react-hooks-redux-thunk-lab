// write your CatList component here
export default function CatList({ catPics }) {
	const renderCats = catPics.map((catPic) => <img key={catPic.id} src={catPic.url} alt="cat"/>)

	return (
		<div>
		 {renderCats}
		</div>
	)
}