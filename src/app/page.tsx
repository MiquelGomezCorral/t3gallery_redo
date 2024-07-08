import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/f722af21-7fc4-4339-9446-7ecc3a9fb393-r6h17o.jpg",
  "https://utfs.io/f/7ad300f2-300b-44e5-afd9-0a5799e2e274-ypf2lh.png",
  "https://utfs.io/f/d2cc6455-7f03-40b4-ab44-27395c49040e-vm23md.png",
  "https://utfs.io/f/1e2eb999-40ed-4742-a162-78b5b756eb61-379yyq.png",
  "https://utfs.io/f/26268fee-15ac-47ea-8a27-fc369ccdbe3a-b17zg9.png",
  "https://utfs.io/f/3c1932cc-cdfd-4baa-b0e8-f51072849715-3pyqpl.png",
  "https://utfs.io/f/54c2097c-482c-45a8-99bc-98155a80004a-bjt8ld.png"
]

const homeImagees = mockUrls.map((url, index)=>({
  id: index + 1,
  url
}))

//<div>{image.name}</div>
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...homeImagees, ...homeImagees].map((image)=>(
          <div key={image.id} className='w-48'>
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
