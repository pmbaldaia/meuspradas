import { Card, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div
          className="absolute left-0 bottom-0 -ml-20 hidden lg:block pointer-events-none"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        ></div>

        <div className="relative pt-20 md:pt-32 md:pb-2">
          <div className="flex justify-center">
            <img
              src="/images/pedro-alves.png"
              className="text-center"
              style={{ borderRadius: "100rem", width: "100px" }}
            />
          </div>
          <div className="flex justify-center">
            <span className="h4 mt-1 mb-5">Pedro Alves</span>
          </div>
          <div className="flex justify-center mt-5 space-x-1 flex-wrap">
            {/*  <Card
              isFooterBlurred
              radius="lg"
              className="border-none mt-5 md:mt-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <Link
                href="https://www.bigap.pt"
                className="flex items-center justify-center"
                style={{
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                    paddingRight: "10px",
                    height: "7rem",
                  }}
                >
                  <Image
                    className=""
                    height={100}
                    src="/images/bigap.png"
                    width={100}
                  />
                </div>
                <div className="items-center text-center">
                  <p style={{ margin: "10px" }}>Visita a minha marca</p>
                  <Image
                    className=""
                    height={250}
                    src="/images/bannerbigap.png"
                    width={250}
                  />
                  <div className="mt-3 flex items-center justify-center">
                    <Button
                      href="https://bigap.pt"
                      className={`flex items-center button-click-me ${styles["button-click-me"]}`}
                    >
                      Visitar bigap.pt{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 256 256"
                      >
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </Link>
            </Card> */}
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none mt-5 md:mt-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                padding: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link
                href="https://vemapo.staaqwe.com/pt/casino?partner=p3704p925p1e7a#registration"
                className="flex items-center justify-center"
                style={{
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <div className="items-center justify-center">
                  <p style={{ margin: "10px" }}>
                    Bónus 100% no 1 depósito mais 25 free spins
                  </p>
                  <div className="flex items-center justify-center">
                    {" "}
                    <Image
                      className=""
                      height={200}
                      src="/images/vemapostar.jpeg"
                      width={200}
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-center">
                    <Button
                      href="https://vemapo.staaqwe.com/pt/casino?partner=p3704p925p1e7a#registration"
                      className={`flex items-center button-click-me ${styles["button-click-me"]}`}
                    >
                      Clica aqui e regista-te
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 256 256"
                      >
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>{" "}
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none mt-5 md:mt-0"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "10px",
                padding: "15px",
              }}
            >
              <Link
                href="https://www.lebull.pt/?partner=p70172p70383p7254#registration"
                className="flex items-center justify-center"
                style={{
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    marginRight: "10px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                    paddingRight: "10px",
                    height: "7rem",
                    marginTop: "10px",
                  }}
                >
                  <Image
                    className=""
                    height={100}
                    src="/images/lebull/logos/Logo_Le - Light.svg"
                    width={100}
                  />
                </div>
                <div className="items-center text-center">
                  <p style={{ margin: "10px" }}>
                    Deposita já e recebe 100% até 400€
                  </p>
                  <Image
                    className=""
                    height={300}
                    src="/images/lebull/banners/sports/970x250 Billboard Desktop - Sports.jpg"
                    width={300}
                  />
                  <div className="mt-3 flex items-center justify-center">
                    <Button
                      href="https://www.lebull.pt/?partner=p70172p70383p7254#registration"
                      className={`flex items-center button-click-me ${styles["button-click-me"]}`}
                    >
                      Clica aqui e começa a ganhar
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 256 256"
                      >
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
                    </Button>
                  </div>
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
