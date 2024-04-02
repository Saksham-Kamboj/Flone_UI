import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function HomeCarousal() {
  return (
    <div className="w-full mt-5 md:mt-10">
      <div className="md:py-10 py-5">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="px-0 md:px-0 py-5 md:py-5 flex justify-end">
            <div className="relative md:w-32 w-24"></div>
          </div>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1524404794194-16bae22718c0?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1524404794194-16bae22718c0?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1524404794194-16bae22718c0?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1524404794194-16bae22718c0?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 lg:basis-1/3">
              <Card
                className="rounded-xl"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <CardHeader className="p-0 overflow-hidden">
                  <Image
                    alt="image"
                    src="https://images.unsplash.com/photo-1524404794194-16bae22718c0?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardHeader>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-primary text-secondary left-0" />
          <CarouselNext className="bg-primary text-secondary right-0" />
        </Carousel>
      </div>
    </div>
  );
}

export default HomeCarousal;
