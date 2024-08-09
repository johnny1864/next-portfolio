import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

import { gridItems as items } from '@/data'

const Grid = () => {
    

  return (
    <section id="about-section" className='w-full py-20'>
        <BentoGrid>
        {items.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
        <BentoGridItem
          key={id}
          id={id}
          title={title}
          description={description}
          img={img}
          className={className}
          spareImg={spareImg}
        />
      ))}
        </BentoGrid>
    </section>
  )
}

export default Grid