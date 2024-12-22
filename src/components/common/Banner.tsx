interface PageBannerProps {
    imageUrl: string;
}

const Banner: React.FC<PageBannerProps> = ({ imageUrl }) => {
    return (
        <div className="relative w-full h-64 sm:h-80 md:h-96 py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10">
            <div
                className="absolute inset-0 bg-cover bg-center dark:opacity-50 opacity-80"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
        </div>
    );
};

export default Banner;
