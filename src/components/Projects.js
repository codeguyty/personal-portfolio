import React from "react";
import bricksite from '../images/bricksite.png';
import graphql from '../images/graphql.png';
import { Carousel, Typography, Button } from "@material-tailwind/react";

export default function Projects() {
  return(
   <div className="max-w-4xl mx-auto py-4">
      <p className="text-2xl text-black sm:text-4xl text-center py-4 font-bold">
        My Projects 🛠
      </p>

        <Carousel className="rounded-xl">
          <div className="relative h-full w-full">
            <img
              src={bricksite}
              alt="1"
              className="h-[35rem] w-full"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  Online Store Checkout Process with Stripe
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  An online store built using NodeJS, ExpressJS, HTML, CSS and JavaScript Integrated with Stripe!
                </Typography>
                <div className="flex justify-center gap-2">
                  <a href="https://bricksite-stripe-checkout.codeguyty.repl.co/" rel="noreferrer" target="_blank">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src={graphql}
              alt="2"
              className="h-[35rem] w-full"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-2/4">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  CodeGuyQL FM
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Created a website that fetches data from a GraphQL endpoint. Using HTML, CSS, JavaScript and GraphQL!
                </Typography>
                <div className="flex justify-center gap-2">
                  <a href="https://graphql-fm.codeguyty.repl.co/" rel="noreferrer" target="_blank">
                  <Button size="lg" color="white">
                    Explore
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
    </div>
  );
}

