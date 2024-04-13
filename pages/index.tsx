import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container d-flex justify-content-between my-2">
          <div className="div">

            <img src="/img/arc_icon.png" height={"50px"} alt="" />
          </div>
          <div className="div">
            <div className="d-flex justify-content-end gap-4 align-items-center">
              <p className="m-0 text-nav-arc-active fw-bold">Home</p>
              <p className="m-0 text-nav-arc">Overview</p>
              <p className="m-0 text-nav-arc">How It Works</p>
              <p className="m-0 text-nav-arc">Pricing</p>
              <p className="m-0 text-nav-arc">Team</p>
              <button className="btn btn-arc ">Download</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mb-5">
        <div className="section">
          <div className="d-flex justify-content-between">
            <div className="col-6 mt-5">
              <div className="div mt-5 pt-5">

                <p className="text-arc mb-0">BEST APP STREAMING</p>
                <h1 className="text-white fw-bold">Watch live broadcasts <br />
                  of gamers playing games.</h1>
                <span className="text-desc">
                  ReadBox is a platform designed to assist you in publishing your creative works, nurturing your aspirations of becoming a proficient writer or comic artist, and ultimately, enabling you to generate income from your endeavors.
                </span><br />
                <button className="btn btn-outline-arc mt-3"><i className="fa-brands fa-google-play me-2 fa-sm"></i>Download for Android</button>
              </div>
            </div>
            <div className="col-6">
              <img src="/img/mockup.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section mt-3">
          <div className="d-flex justify-content-between">
            <div className="col-4">
              <div className="card bg-transparent px-3">
                <div className="d-flex align-items-center">

                  <img src="/img/streaming-icon.png" alt="" />
                  <h5 className="m-0 text-white ms-2">Live Streaming</h5>
                </div>
                <p className="text-desc mt-1">You can engage with your fans by live streaming while playing the game, allowing you to interact with them in real-time and share your gaming experiences.</p>
              </div>
            </div>
            <div className="vl"></div>
            <div className="col-4">
              <div className="card bg-transparent px-3">
                <div className="d-flex align-items-center">

                  <img src="/img/playicon.png" alt="" />
                  <h5 className="m-0 text-white ms-2">Watch Streaming</h5>
                </div>
                <p className="text-desc mt-1">You don't have to be a broadcaster yourself; rather, you can immerse yourself in the world of broadcasting by tuning in to watch professionals at work.</p>
              </div>
            </div>
            <div className="vl"></div>
            <div className="col-4">
              <div className="card bg-transparent px-3">
                <div className="d-flex align-items-center">

                  <img src="/img/earn-icon.png" alt="" />
                  <h5 className="m-0 text-white ms-2">Earn Icon</h5>
                </div>
                <p className="text-desc mt-1">
                  Monetize your gaming sessions by broadcasting them, turning your gameplay into a source of income and entertaining your audience with your gaming skills.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section mb-3">
          <div className="d-flex justify-content-between">
            <div className="col">
              <img src="/img/mockup2.png" alt="" />
            </div>
            <div className="div  text-end">
              <div className="div mt-5 pt-5 ">

                <p className="text-arc mb-0 ">BEST APP STREAMING</p>
                <h1 className="text-white fw-bold">Watch live broadcasts <br />
                  of gamers playing games.</h1>
                <span className="text-desc">
                  ReadBox is a platform designed to assist you in publishing your creative works, nurturing your aspirations of becoming a proficient writer or comic artist, and ultimately, enabling you to generate income from your endeavors.
                </span><br />

              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center text-white fw-bold">Why choose us</h2>
        <div className="div mt-5">
          <div className="d-flex justify-content-between">
            <div className="col-4 px-5">
              <div className="card-choose h-100 text-center p-4">
                <img src="/img/Growth-icon.png" height={100} alt="" />
                <h5 className="text-white fw-bold mt-2">Growth</h5>
                <p className="text-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem quasi modi suscipit iste libero atque explicabo deserunt reprehenderit earum, nulla doloremque aliquam hic placeat, numquam quos odit quaerat dolore exercitationem!</p>
                <button className="btn btn-outline-arc rounded-pill mt-2 w-50">Details</button>
              </div>
            </div>
            <div className="col-4 px-5">
              <div className="card-choose h-100 text-center p-4">
                <img src="/img/community-icon.png" height={100} alt="" />
                <h5 className="text-white fw-bold mt-2">Community</h5>
                <p className="text-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero doloremque voluptas quasi, voluptates commodi at optio reprehenderit quae consectetur, error cupiditate aperiam animi, ducimus ullam ?</p>
                <button className="btn btn-outline-arc rounded-pill mt-2 w-50">Details</button>
              </div>
            </div>
            <div className="col-4 px-5">
              <div className="card-choose h-100 text-center p-4">
                <img src="/img/Growth-icon.png" height={100} alt="" />
                <h5 className="text-white fw-bold mt-2">Innovative</h5>
                <p className="text-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda laudantium aliquid amet, alias nesciunt explicabo ipsum qui ipsa aut quasi voluptatibus error sunt suscipit maiores nulla commodi? Dicta, eos possimus.</p>
                <button className="btn btn-outline-arc rounded-pill mt-2 w-50">Details</button>
              </div>
            </div>
          </div>
        </div>
        <div className="section mt-5">
          <div className="d-flex justify-content-between">
            <div className="col-6 mt-5">
              <div className="div mt-5 pt-5">

                <p className="text-arc mb-0">BEST APP STREAMING</p>
                <h1 className="text-white fw-bold">Watch live broadcasts <br />
                  of gamers playing games.</h1>
                <span className="text-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore eos id, eum facilis amet, optio in corrupti libero recusandae fugiat nam obcaecati voluptatum sint. Repellendus dolor perspiciatis sint exercitationem?
                </span><br />

              </div>
            </div>
            <div className="col-6 text-end">
              <img src="/img/mockup3.png" alt="" />
            </div>
          </div>
        </div>
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
        <section className="mt-5 pt-5">
          <div className="d-flex pt-4">
            <div className="col">
              <h2 className="text-white fw-bold">Frequently <br />
                Asked <span className="text-arc"> Questions</span></h2>
            </div>
            <div className="col">
              <div className="accordion text-white " id="accordionExample">
                <div className="accordion-item accordian-arc ">
                  <h2 className="accordion-header " id="headingOne">
                    <button className="accordion-button  bg-transparent text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How can I access <span className="text-arc mx-1"> Arc Play </span> and start enjoying its features?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse  " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      You can access <span className="text-arc "> Arc Play </span>  by downloading the app from the App Store or Google Play Store. Once downloaded, sign up for an account, and you'll be ready to explore and enjoy the platform's offerings.
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
                      What types of content are available on <span className="text-arc ms-1"> Arc Play </span>?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse  " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      <span className="text-arc "> Arc Play </span> offers a diverse range of content, including live streams, videos, articles, and interactive experiences, covering various topics such as gaming, entertainment, lifestyle, and more.
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
                      Is <span className="text-arc mx-1"> Arc Play </span> free to use, or are there subscription fees?
                    </button>
                  </h2>
                  <div id="collapse3" className="accordion-collapse collapse  " aria-labelledby="heading3" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      <span className="text-arc "> Arc Play </span> offers both free and premium content. While some content may be freely accessible, premium features and exclusive content may require a subscription or one-time purchase.
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
                      Can I engage with other users or content creators on <span className="text-arc ms-1"> Arc Play </span>?
                    </button>
                  </h2>
                  <div id="collapse4" className="accordion-collapse collapse  " aria-labelledby="heading4" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      Yes, <span className="text-arc "> Arc Play </span> encourages user interaction and engagement. You can interact with other users through comments, likes, shares, and participating in community discussions. Additionally, you can connect with content creators directly through the platform.
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
                      How can I contribute my own content to <span className="text-arc ms-1"> Arc Play </span>?
                    </button>
                  </h2>
                  <div id="collapse5" className="accordion-collapse collapse  " aria-labelledby="heading5" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      If you're a content creator interested in sharing your work on <span className="text-arc "> Arc Play </span>, you can apply to become a creator through the platform's submission process. Once approved, you'll gain access to tools and features to publish and monetize your content on Arc Play.
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
