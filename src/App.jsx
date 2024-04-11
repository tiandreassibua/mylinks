import {
    FaArrowRight,
    FaDiscord,
    FaGithub,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";

const App = () => {
    return (
        <div className="max-w-md mx-auto px-5">
            <header className="flex flex-col items-center pt-5">
                <div>
                    <img
                        className="rounded-full border-2 border-[#292929]"
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/72f19146c1196d000e7fe9847f576414~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1712966400&x-signature=YmeE99UjVnasOID0cg3ao2D7fJw%3D"
                        alt="profile-picture"
                    />
                </div>
                <h1 className="mt-3 text-xl font-bold">andreassibua</h1>
                <p>Halo guyss, sehat selalu have fun...</p>
            </header>
            <hr className="my-5" />
            <div className="max-w-md mx-auto md:px-5 w-full flex flex-col space-y-5">
                <h5 className="text-center">My Links</h5>
                <a
                    href="https://www.youtube.com/@andreassibua9946"
                    className="flex justify-between items-center border-2 rounded-full py-4 px-6 border-[#292929] hover:scale-105 transition-all"
                    title="Saweria"
                >
                    <div className="flex items-center">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPqTe35ip0ChIr7DhQ4Cg2CpWPmGaAvh75Vi2C5GkE1Q&s"
                            alt="saweria"
                            className="w-8"
                        />
                        <span className="ml-2 font-semibold">
                            Donasi sedekah
                        </span>
                    </div>
                    <FaArrowRight />
                </a>
                <a
                    href="https://www.youtube.com/@andreassibua9946"
                    className="flex justify-between items-center border-2 rounded-full py-4 px-6 border-[#292929] hover:scale-105 transition-all"
                    title="Youtube Channel"
                >
                    <div className="flex items-center">
                        <FaYoutube size={25} className="text-red-500" />
                        <span className="ml-2 font-semibold">
                            Andreas Sibua
                        </span>
                    </div>
                    <FaArrowRight />
                </a>
                <a
                    href="https://discord.gg/JxxykBRe"
                    className="flex gap-x-2 justify-between items-center border-2 rounded-full py-4 px-6 border-[#292929] hover:scale-105 transition-all"
                    title="Discord Garuda Breakpoint Indonesia"
                >
                    <div className="flex items-center">
                        <FaDiscord size={25} className="text-[#5865F2]" />
                        <span className="ml-2 font-semibold">
                            Garuda Breakpoint Indonesia
                        </span>
                    </div>
                    <FaArrowRight />
                </a>
                <a
                    href="https://www.youtube.com/@andreassibua9946"
                    className="flex gap-x-2 justify-between items-center border-2 rounded-full py-4 px-6 border-[#292929] hover:scale-105 transition-all"
                    title="My Github"
                >
                    <div className="flex items-center">
                        <FaGithub size={25} className="text-[#24292e]" />
                        <span className="ml-2 font-semibold">
                            tiandreassibua
                        </span>
                    </div>
                    <FaArrowRight />
                </a>
                <a
                    href="https://www.linkedin.com/in/andreas-sibua"
                    className="flex gap-x-2 justify-between items-center border-2 rounded-full py-4 px-6 border-[#292929] hover:scale-105 transition-all"
                    title="LinkedIn"
                >
                    <div className="flex items-center">
                        <FaLinkedin size={25} className="text-[#0b66c3]" />
                        <span className="ml-2 font-semibold">
                            Andreas Sibua
                        </span>
                    </div>
                    <FaArrowRight />
                </a>
                <a
                    href="https://www.youtube.com/@andreassibua9946"
                    className="flex gap-x-2 justify-between items-center border-2 rounded-full py-4 px-6 border-[#292929] hover:scale-105 transition-all"
                    title="Instagram"
                >
                    <div className="flex items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                            alt="instagram"
                            className="w-6"
                        />
                        <span className="ml-2 font-semibold">
                            @andreassibua_
                        </span>
                    </div>
                    <FaArrowRight />
                </a>
            </div>
            <footer className="w-full mt-2 p-8">
                <p className="font-semibold text-center">
                    Made with ❤️ by Andreas Sibua
                </p>
            </footer>
        </div>
    );
};

export default App;
