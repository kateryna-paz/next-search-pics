import Image from 'next/image'
import images from '../(data)/images.json'

interface Image {
  id: number
  alt_description: string
  urls: {
    small: string
  }
}

type ImageGridProps = {
  pics: Array<Image>
}

function ImageGrid({ pics }: ImageGridProps) {
  return (
    <div className='grid w-full grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-3'>
      <div className='flex flex-col gap-8'>
        {pics?.map(image => (
          <Image
            alt={image.alt_description}
            src={image.urls.small}
            key={image.id}
            width={500}
            height={800}
          />
        ))}
      </div>
      <div className='mt-6 flex flex-col-reverse gap-8'>
        {pics?.map(image => (
          <Image
            alt={image.alt_description}
            src={image.urls.small}
            key={image.id}
            width={500}
            height={800}
          />
        ))}
      </div>
      <div className='flex flex-col gap-6'>
        {pics?.map(image => (
          <Image
            alt={image.alt_description}
            src={image.urls.small}
            key={image.id}
            width={500}
            height={800}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGrid
