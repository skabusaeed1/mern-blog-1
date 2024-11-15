import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from 'react-icons/bs'

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5 ">
            <Link
              to={"/"}
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Tech
              </span>
              Blog
            </Link>
          </div>

            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="" rel=" noopener noreferre">
                        My Portfolio
                    </Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/in/abusaeed-ahmed-shaikh-440b04233/?originalSubdomain=in" target="_blank" rel=" noopener noreferre">
                        Linkedin
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="About"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="https://github.com/skabusaeed1"  target="_blank" rel=" noopener noreferre">
                        GIthub
                    </Footer.Link>
                    <Footer.Link href="#">
                        Projects
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Follow us"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="https://github.com/skabusaeed1"  target="_blank" rel=" noopener noreferre">
                        GIthub
                    </Footer.Link>
                    <Footer.Link href="#">
                        Projects
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
                <div>
                <Footer.Title title="Legal"/>
                <Footer.LinkGroup col>
                    <Footer.Link href="#">
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link href="#">
                        Terms & Conditions
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

            </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Tech Blogs" year={new Date().getFullYear()} />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="#" icon={BsFacebook} />
                <Footer.Icon href="#" icon={BsInstagram} />
                <Footer.Icon href="#" icon={BsTwitter} />
                <Footer.Icon href="https://github.com/skabusaeed1" icon={BsGithub} />
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
