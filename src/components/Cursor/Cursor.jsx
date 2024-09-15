import React, { useEffect } from 'react'
import "./Cursor.css"

function Cursor() {


    useEffect(() => {
        const coords = { x: 0, y: 0 };

        const circles = document.querySelectorAll(".circle");
        const circleLength = circles.length

        const colors = ["#e24727", "#e5522f", "#e85c36", "#eb653e", "#ee6e46", "#f0774f", "#f37f57", "#f6885f", "#f89068", "#fb9871", "#fda07a", "#ffa883"]

        function hasCursor() {
            return ('onmousemove' in window) && !('ontouchstart' in window);
        }

        if (!hasCursor()) {
            circles.forEach((circle) => {
                circle.style.visibility = "hidden"
            })
        } else {
            circles.forEach(function (circle, index) {
                circle.x = 0;
                circle.y = 0;
                circle.style.backgroundColor = colors[index % colors.length]
            })

            window.addEventListener("mousemove", function (e) {

                coords.x = e.pageX;
                coords.y = e.pageY;

            })

            function animateCircles() {
                let x = coords.x;
                let y = coords.y;

                circles.forEach((circle, index) => {

                    circle.style.left = x - 12 + "px";
                    circle.style.top = y - 12 + "px";

                    circle.style.scale = (circleLength - index) / circleLength;

                    circle.x = x;
                    circle.y = y;

                    const nextCircle = circles[index + 1] || circles[0];
                    x += (nextCircle.x - x) * 0.3;
                    y += (nextCircle.y - y) * 0.3;
                });

                requestAnimationFrame(animateCircles);
            }

            animateCircles()

            const links = document.querySelectorAll(".link");

            links.forEach((link) => {
                link.addEventListener("mouseover", () => {
                    circles.forEach((circle) => {
                        circle.style.opacity = 0.2
                    })
                })
            })

            links.forEach((link) => {
                link.addEventListener("mouseout", () => {
                    circles.forEach((circle) => {
                        circle.style.opacity = 1
                    })
                })
            })
        }
    }, [])


    return (
        <>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </>

    )
}

export default Cursor