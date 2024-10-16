import { Card } from "."


function GridLayout({data}) {
    

  return (
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {data.map((item) => {
              return <Card key={item.id} {...item} />
          })}
    </div>
  )
}

export default GridLayout