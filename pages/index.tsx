import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-arc">
        <div className="container d-flex justify-content-between my-2">
          <div className="div">
            <img src="/img/arc_icon.png" height={"50px"} alt="" />
          </div>
          <div className="d-block d-lg-none">
            <button type="button" className="btn bg-transparent " data-bs-toggle="modal" data-backdrop="false" data-bs-target="#menunav">
              <i className="fa-solid fa-bars fa-xl text-arc"></i>
            </button>
          </div>
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-end gap-4 align-items-center">
              <Link href={"#home"} className="text-decoration-none">
                <p className="m-0 text-nav-arc-active fw-bold">Home</p>
              </Link>
              <Link href={"#benefits"} className="text-decoration-none">
                <p className="m-0 text-nav-arc ">Benefits</p>
              </Link>
              <Link href={"#overview"} className="text-decoration-none">

                <p className="m-0 text-nav-arc">Overview</p>
              </Link>
              <Link href={"#choose"} className="text-decoration-none">
                <p className="m-0 text-nav-arc">Why Choose Us</p>
              </Link>
              <Link href={"#featured"} className="text-decoration-none">
                <p className="m-0 text-nav-arc">Featured</p>
              </Link>
              <Link href={"#faq"} className="text-decoration-none">
                <p className="m-0 text-nav-arc">Faq</p>
              </Link>
              <button className="btn btn-arc ">Download</button>

            </div>
          </div>

        </div>
      </nav>

      <div className="container mb-5 pt-5">
        <div className="modal fade" style={{ backgroundColor: " #16182600" }} id="menunav" tabIndex={-1} aria-labelledby="menunavLabel" aria-hidden="true">
          <div className="modal-dialog mt-5 pt-5 px-5" >
            <div className="modal-content bg-nav borad20" >

              <div className="modal-body text-center text-white">
                <Link href={"#home"} className="text-decoration-none">
                  <p className=" text-nav-arc-active fw-bold">Home</p>
                </Link>
                <Link href={"#benefits"} className="text-decoration-none">
                  <p className=" text-nav-arc ">Benefits</p>
                </Link>
                <Link href={"#overview"} className="text-decoration-none">

                  <p className=" text-nav-arc">Overview</p>
                </Link>
                <Link href={"#choose"} className="text-decoration-none">
                  <p className=" text-nav-arc">Why Choose Us</p>
                </Link>
                <Link href={"#featured"} className="text-decoration-none">
                  <p className=" text-nav-arc">Featured</p>
                </Link>
                <Link href={"#faq"} className="text-decoration-none">
                  <p className=" text-nav-arc">Faq</p>
                </Link>
                <button className="btn btn-arc ">Download</button>
              </div>

            </div>
          </div>
        </div>
        <div className="section pt-lg-5" id="home">
          <div className="d-flex justify-content-between flex-wrap" >
            <div className="col-lg-6 col-12 mt-lg-5 text-center text-lg-start">
              <div className="div mt-5 pt-lg-5">

                <small className="text-white mb-0">
                  <small>
                    BEST APP STREAMING
                  </small>
                </small>
                <h1 className="text-arc fw-bold">Arc Play <br />
                </h1>
                <span className="text-desc">
                  Arc Play is a dynamic live streaming platform tailored for gamers, enabling users to watch, stream their gameplay, donate to their favorite streamers, and connect with fellow gaming enthusiasts. With its user-friendly interface and robust features, Arc Play fosters a vibrant gaming community where players can share experiences, support each other, and forge new friendships while enjoying their favorite games.
                </span><br />
                <button className="btn btn-outline-arc mt-3"><i className="fa-brands fa-google-play me-2 fa-sm"></i>Download for Android</button>
              </div>
            </div>
            <div className="col-lg-6 col-12 text-lg-end text-center">
              <img src="/img/mockup.png" className="w-75" alt="" />
            </div>
          </div>
        </div>
 

          <div className=" mt-lg-5 mt-3" id="benefits">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="col-lg-4 col-12 mb-4 mb-lg-0 border-bottom-benefits   text-lg-start text-center">
                <div className="card bg-transparent px-3 ">
                  <div className="d-flex align-items-center  justify-content-center justify-content-lg-start ">

                    <img src="/img/streaming-icon.png" alt="" />
                    <h5 className="m-0 text-white ms-2">Live Streaming</h5>
                  </div>
                  <p className="text-desc mt-1">You can engage with your fans by live streaming while playing the game, allowing you to interact with them in real-time and share your gaming experiences.</p>
                </div>
              </div>
              <div className="col-lg-4 col-12 mb-4 mb-lg-0 border-bottom-benefits vl text-lg-start text-center">
                <div className="card bg-transparent px-3">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start">

                    <img src="/img/playicon.png" alt="" />
                    <h5 className="m-0 text-white ms-2">Watch Streaming</h5>
                  </div>
                  <p className="text-desc mt-1">You don't have to be a broadcaster yourself; rather, you can immerse yourself in the world of broadcasting by tuning in to watch professionals at work.</p>
                </div>
              </div>
              <div className="col-lg-4 col-12 mb-4 mb-lg-0 vl text-lg-start text-center">
                <div className="card bg-transparent px-3">
                  <div className="d-flex align-items-center justify-content-center justify-content-lg-start">

                    <img src="/img/earn-icon.png" alt="" />
                    <h5 className="m-0 text-white ms-2">Earn Icon</h5>
                  </div>
                  <p className="text-desc mt-1">
                    Monetize your gaming sessions by broadcasting them, turning your gameplay into a source of income and entertaining your audience with your gaming skills.</p>
                </div>
              </div>
            </div>
          </div>
     


        <div className="section mb-3" id="overview">
          <div className="d-flex justify-content-between flex-wrap-reverse">
            <div className="col-lg-6 col-12 text-lg-start text-center  ">
              <img src="/img/mockup2.png" className="w-100" alt="" />
            </div>
            <div className="col-lg-5  col-12 text-lg-end text-center">
              <div className="div mt-lg-5 pt-lg-5 ">

                <h1 className="text-white fw-bold">Overview</h1>
                <span className="text-desc">
                  Arc Play: Elevate your gaming experience with our all-in-one platform. Watch live streams, become a streamer, donate to support your favorites, and connect with gamers worldwide. Join us and immerse yourself in the ultimate gaming community.
                </span><br />

              </div>
            </div>
          </div>
        </div>
        
        <section id="choose">
          <h2 className="text-center text-white fw-bold mt-4 mt-lg-0" >Why choose us</h2>
          <div className="div mt-5">
            <div className="d-flex justify-content-between flex-wrap ">
              <div className="col-lg-4  mb-4 mb-lg-0 col-12 px-lg-3  ">
                <div className="card-choose h-100 text-center p-4">
                  <img src="/img/Growth-icon.png" height={100} alt="" />
                  <h5 className="text-white fw-bold mt-2">Growth</h5>
                  <p className="text-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi modi suscipit iste libero atque explicabo deserunt reprehenderit earum, nulla doloremque aliquam hic placeat, numquam quos odit quaerat dolore exercitationem!</p>
                  <button className="btn btn-outline-arc rounded-pill mt-2 w-50">Details</button>
                </div>
              </div>
              <div className="col-lg-4  mb-4 mb-lg-0 col-12 px-lg-3  ">
                <div className="card-choose h-100 text-center p-4">
                  <img src="/img/community-icon.png" height={100} alt="" />
                  <h5 className="text-white fw-bold mt-2">Community</h5>
                  <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero doloremque voluptas quasi, voluptates commodi at optio reprehenderit quae consectetur, error cupiditate aperiam animi, ducimus ullam ?</p>
                  <button className="btn btn-outline-arc rounded-pill mt-2 w-50">Details</button>
                </div>
              </div>
              <div className="col-lg-4  mb-4 mb-lg-0 col-12 px-lg-3  ">
                <div className="card-choose h-100 text-center p-4">
                  <img src="/img/innovative-icon.png" height={100} alt="" />
                  <h5 className="text-white fw-bold mt-2">Innovative</h5>
                  <p className="text-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laudantium aliquid amet, alias nesciunt explicabo ipsum qui ipsa aut quasi voluptatibus error sunt suscipit maiores nulla commodi? Dicta, eos possimus.</p>
                  <button className="btn btn-outline-arc rounded-pill mt-2 w-50">Details</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="section mt-lg-5" id="featured">
            <div className="d-flex justify-content-between flex-wrap">
              <div className="col-lg-6 col-12 text-center text-lg-start mt-5">
                <div className="div mt-lg-5 pt-lg-5">

                  <p className="text-arc mb-0">Featured</p>
                  <h1 className="text-white fw-bold">Watch live broadcasts <br />
                    of gamers playing games.</h1>
                  <span className="text-desc">
                    Arc Play transforms gaming with live streaming, streamlined support for favorite streamers, and a vibrant community hub where gamers connect, find friends, and discuss strategies. With a user-friendly interface and real-time interaction via live chat, Arc Play offers the ultimate gaming experience for enthusiasts worldwide.
                  </span><br />

                </div>
              </div>
              <div className="col-lg-6 col-12 text-center text-lg-end text-end">
                <img src="/img/mockup3.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="card-choose text-white">
            <div className="card-body">
              <div className="d-flex p-3 align-items-center">
                <div className="col-6">
                  <h3 className=" fw-bold">Watch live broadcasts
                    of gamers playing games.</h3>
                </div>
                <div className="col-6">
                  <p>Watch live broadcasts of gamers playing games.Watch live broadcasts of gamers playing games.</p>
                  <Link href="#">

                    <img src="/img/get-it-on.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-lg-5 pt-lg-5" id="faq">
          <div className="d-flex pt-4 flex-wrap">
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h2 className="text-white fw-bold">Frequently <br />
                Asked <span className="text-arc"> Questions</span></h2>
            </div>
            <div className="col-lg-6 col-12 text-center ">
              <div className="accordion text-white " id="accordionExample">
                <div className="accordion-item accordian-arc ">
                  <h2 className="accordion-header " id="headingOne">
                    <button className="accordion-button  bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How can I access Arc Play and start enjoying its features?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse  " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      You can access Arc Play  by downloading the app from the App Store or Google Play Store. Once downloaded, sign up for an account, and you'll be ready to explore and enjoy the platform's offerings.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-3">
                <hr className="text-white my-1" />
              </div>
              <div className="accordion text-white " id="accordionExample">
                <div className="accordion-item accordian-arc ">
                  <h2 className="accordion-header " id="headingTwo">
                    <button className="accordion-button  bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      What types of content are available on Arc Play?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse  " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      Arc Play offers a diverse range of content, including live streams, videos, articles, and interactive experiences, covering various topics such as gaming, entertainment, lifestyle, and more.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-3">
                <hr className="text-white my-1" />
              </div>
              <div className="accordion text-white " id="accordionExample">
                <div className="accordion-item accordian-arc ">
                  <h2 className="accordion-header " id="heading3">
                    <button className="accordion-button  bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                      Is Arc Play free to use, or are there subscription fees?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse  " aria-labelledby="heading3" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      Arc Play offers both free and premium content. While some content may be freely accessible, premium features and exclusive content may require a subscription or one-time purchase.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-3">
                <hr className="text-white my-1" />
              </div>
              <div className="accordion text-white " id="accordionExample">
                <div className="accordion-item accordian-arc ">
                  <h2 className="accordion-header " id="heading4">
                    <button className="accordion-button  bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                      Can I engage with other users or content creators on Arc Play?
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse  " aria-labelledby="heading4" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      Yes, Arc Play encourages user interaction and engagement. You can interact with other users through comments, likes, shares, and participating in community discussions. Additionally, you can connect with content creators directly through the platform.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-3">
                <hr className="text-white my-1" />
              </div>
              <div className="accordion text-white " id="accordionExample">
                <div className="accordion-item accordian-arc ">
                  <h2 className="accordion-header " id="heading5">
                    <button className="accordion-button  bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                      How can I contribute my own content to Arc Play?
                    </button>
                  </h2>
                  <div id="collapse5" className="accordion-collapse collapse  " aria-labelledby="heading5" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      If you're a content creator interested in sharing your work on Arc Play, you can apply to become a creator through the platform's submission process. Once approved, you'll gain access to tools and features to publish and monetize your content on Arc Play.
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-3">
                <hr className="text-white my-1" />
              </div>
            </div>
          </div>
        </section>

      </div>

      <footer className="bg-white py-3 footer-arc">
        <p className="m-0 text-center">Copyright © 2024 Arc Play</p>
      </footer>
    </>
  )
}
