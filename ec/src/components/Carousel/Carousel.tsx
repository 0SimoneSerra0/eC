"use client";
import { useQuery } from "@tanstack/react-query"
import { getProducts } from "@/lib/graphql/graphql";
import { ReactElement, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./Carousel.css"


function renderImgs(imgsInfo: [string, string][]): ReactElement[] {
    return imgsInfo.map<ReactElement>((imgInfo, i) => <img key={i} src={String(imgInfo[0])} alt={imgInfo[1]} className="cursor-pointer" />);
}


export type CarouselElement = {
    img: string,
    imgAlt: string,
    link: string
}

export function Carousel(props: { elements: CarouselElement[] }) {
    const [imgs, setImgs] = useState<ReactElement[]>([]);
    const [index, setIndex] = useState(0);
    const currentTween = useRef<gsap.core.Tween>(null);


    useEffect(() => {
        const imgsInfo: [string, string][] = [];
        props.elements.forEach(el => imgsInfo.push([el.img, el.imgAlt]));

        setImgs(renderImgs(imgsInfo));
    }, [props.elements]);


    useEffect(() => {
        const dotsDiv = document.querySelector<HTMLDivElement>(".carousel-dots-container");
        console.log("1: ", dotsDiv);
        if (dotsDiv) {

            console.log(imgs.length)

            const dots = [...dotsDiv.children];
            dots.forEach( dot => {
                dotsDiv.removeChild(dot);
            });

            for(let i = 0; i < imgs.length; i++){
                const newDot = document.createElement("div");
                newDot.classList.add("carousel-dot");
                console.log(newDot)
                dotsDiv.appendChild(newDot);
            }
        }


    }, [imgs]);


    // This function Shows the image with the index equal to the state variable
    function selectActiveImage() {
        const images = document.querySelectorAll<HTMLImageElement>(".carousel img");
        if (images && images.length > 0) {
            const img = images[index] as HTMLImageElement;
            img.classList.add("active");
            gsap.to(img, {
                opacity: 1,
                duration: 0.5,
            });
        }
    }

    // This functon hide the previously active image and call 'selectActiveImage' right after. Also changes the selected dot at the bottom of the carousel
    useEffect(() => {

        // Image selection
        const activeImg = document.querySelector<HTMLImageElement>(".carousel img.active");
        if (activeImg) {
            if(currentTween.current){
                currentTween.current.render(0);
                currentTween.current.kill();
                currentTween.current = null;
            }

            currentTween.current = gsap.to(activeImg, {
                opacity: 0,
                duration: 0.5,
            });

            currentTween.current.then(() => {
                activeImg.classList.toggle("active");
                selectActiveImage();
            });
            
        } else {
            selectActiveImage();
        }

        // Dot selection
        const currentDot = document.querySelector(".selected-carousel-dot");
        currentDot?.classList.remove("selected-carousel-dot");
        const dots = document.querySelectorAll(".carousel-dot");
        if(dots){
            if(index < dots.length)
                dots[index].classList.add("selected-carousel-dot")
        }
    }, [index, imgs]);



    function increaseIndex() {
        if (imgs.length == 0)
            return;

        setIndex(prevIndex => prevIndex >= imgs.length - 1 ? 0 : prevIndex + 1);
    }
    function decreaseIndex() {
        if (imgs.length <= 0)
            return;

        setIndex(prevIndex => prevIndex <= 0 ? imgs.length - 1 : prevIndex - 1);
    }

    // const { data, error } = useQuery({
    //     queryKey: ["products"],
    //     queryFn: () => getProducts(),
    // });

    return (
        <div className="carousel">
            <button className="carousel-arrow left" onClick={decreaseIndex}>❮</button>
            {imgs}
            <button className="carousel-arrow right" onClick={increaseIndex}>❯</button>
            <div className="carousel-dots-container">

            </div>
        </div>
    );
}