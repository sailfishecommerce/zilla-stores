import Link from "next/link";

export default function InfoCards() {
    return (
        <section className="container-fluid px-0">
            <div className="row g-0">
                <div className="col-md-6">
                    <Link href="/blog-list-sidebar" passHref>
                        <a className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-primary">
                            <div className="card-body text-center">
                                <i className="ci-edit h3 mt-2 mb-4 text-primary"></i>
                                <h3 className="h5 mb-1">Read the blog</h3>
                                <p className="text-muted fs-sm">
                                    Latest store, fashion news and trends
                                </p>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="col-md-6">
                    <a
                        className="card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-accent"
                        href="#"
                    >
                        <div className="card-body text-center">
                            <i className="ci-instagram h3 mt-2 mb-4 text-accent"></i>
                            <h3 className="h5 mb-1">Follow on Instagram</h3>
                            <p className="text-muted fs-sm">
                                #ShopWithCartzilla
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
