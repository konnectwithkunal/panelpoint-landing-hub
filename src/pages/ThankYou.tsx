// src/pages/ThankYou.tsx
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

type LocationState = {
    name?: string;
    productName?: string;
    from?: string; // "contact" | "product" etc
};

const ThankYou = () => {
    const location = useLocation();
    const state = (location.state || {}) as LocationState;

    useEffect(() => {
        // optional: clear scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />

            <main className="flex-1">
                <section className="py-24">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-border p-10 text-center shadow-lg">
                            <div className="mx-auto w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                <CheckCircle className="w-14 h-14 text-primary" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                                Thank you{state.name ? `, ${state.name.split(" ")[0]}` : ""}!
                            </h1>

                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                                We received your {state.from === "product" ? "product inquiry" : state.from === "contact" ? "message" : "submission"}.
                                {state.productName ? (
                                    <>
                                        {" "}We'll review your interest in <strong className="text-primary">{state.productName}</strong> and get back to you shortly.
                                    </>
                                ) : (
                                    " We'll get back to you within 24 hours."
                                )}
                            </p>


                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                <Link to="/">
                                    <button className="px-6 py-3 rounded-full bg-primary text-background font-medium hover:opacity-95 transition">
                                        Back to Home
                                    </button>
                                </Link>

                                {/* Link to products section on the home page */}
                                <Link to="/#products">
                                    <button className="px-6 py-3 rounded-full border border-border text-foreground hover:bg-foreground/5 transition">
                                        View Products
                                    </button>
                                </Link>

                                {/* Link to contact section on the home page */}
                                <Link to="/#contact">
                                    <button className="px-6 py-3 rounded-full bg-foreground text-background hover:opacity-95 transition">
                                        Contact Support
                                    </button>
                                </Link>
                            </div>


                            <div className="mt-8 text-sm text-muted-foreground">
                                <p>If you don't hear from us, please check your spam folder or email <a href="mailto:sales@jpelectricalcontrols.com" className="text-primary underline">sales@jpelectricalcontrols.com</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ThankYou;
