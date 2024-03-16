import Link from "@/shared/components/Link";
import {siteMetadata} from "@/data/siteMetadata";
import {headerNavLinks} from "@/data/headerNavLinks";


const MainHeader = () => {
    return (
        <header className="flex items-center justify-between py-2">
            <div>
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                    <div className="flex items-center justify-between">
                        <div className="mr-3">
                            AWS UG Kazakhstan
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
                {headerNavLinks
                    .filter((link) => link.href !== '/')
                    .map((link) => (
                        <Link
                            key={link.title}
                            href={link.href}
                            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                        >
                            {link.title}
                        </Link>
                    ))}
            </div>
        </header>
    )
}

export default MainHeader
