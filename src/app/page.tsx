import Link from "next/link";

export default function Home() {
  const noticias =[
    {
      id:"1",
      titulo:"noticia teste",
      descricao:"uma noticia de teste para o curso"
    },
    {
      id:"2",
      titulo:"noticia teste",
      descricao:"uma noticia de teste para o curso"
    }
  ]

  return (
      <div className="w-full px-4 py-8">
        <header className="mb-8 ">
          <h1 className="text-4xl font-bold text-center mb-4">Ultimas Noticias</h1>
          <div className="flex justify-center" >
            <Link className="bg-sky-600 px-4 py-2 text-white rounded-md hover:bg-sky-700 transition-colors" href="/novaNoticia" >+ Nova Noticia</Link>
          </div>
          </header>
          <div className="w-full flex flex-col items-center">
          {
            noticias.map(noticias =>(
             <div key={noticias.id} className="max-w-4xl w-full mb-4 bg-white shadow-md rounded-lg">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{noticias.titulo}</h2>
                <p className="text-gray-700 mb-4 line-clamp-2">{noticias.descricao}</p>
                <Link className="text-sky-600 hover:text-sky-800" href={`/noticia/${noticias.id}`}> Veja Mais &gt;</Link>
              </div>
             </div>
            ))
          }
          </div>

      </div>
  );
}
