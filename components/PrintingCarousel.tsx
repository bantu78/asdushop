import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButtons'
 
const PARALLAX_FACTOR = 0.2

interface CarouselProps {
  slides: number[]
  options?: EmblaOptionsType
}

const PrintCarousel: React.FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const initializeTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const initializeTweenFactor = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenFactor.current = PARALLAX_FACTOR * emblaApi.scrollSnapList().length
  }, [])

  const updateParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const visibleSlides = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !visibleSlides.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)
                diffToTarget = scrollSnap + sign * (1 - scrollProgress) * sign
              }
            })
          }

          const translateX = diffToTarget * (-1 * tweenFactor.current) * 100
          tweenNodes.current[slideIndex].style.transform = `translateX(${translateX}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    initializeTweenNodes(emblaApi)
    initializeTweenFactor(emblaApi)
    updateParallax(emblaApi)

    emblaApi
      .on('reInit', initializeTweenNodes)
      .on('reInit', initializeTweenFactor)
      .on('reInit', updateParallax)
      .on('scroll', updateParallax)
      .on('slideFocus', updateParallax)

    return () => {
      emblaApi
        .off('reInit', initializeTweenNodes)
        .off('reInit', initializeTweenFactor)
        .off('reInit', updateParallax)
        .off('scroll', updateParallax)
        .off('slideFocus', updateParallax)
    }
  }, [emblaApi, initializeTweenNodes, initializeTweenFactor, updateParallax])
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                   
                            <img
                            className="embla__slide__img embla__parallax__img3"
                            src={`/projects/impression/imp (${index+1}).jpg`}
                            alt={`Slide ${index + 1}`}
                          />
                     
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot${index === selectedIndex ? ' embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PrintCarousel
