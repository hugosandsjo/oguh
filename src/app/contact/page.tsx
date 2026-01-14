import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Content Column */}
          <div>
            <h1 className="text-4xl font-medium tracking-tight mb-12">About</h1>

            {/* About Text */}
            <div className="space-y-6 mb-12">
              <p className="text-gray-600">
                Hi! I&apos;m Hugo Sandsjö, illustrator and motion designer based
                in Gothenburg, Sweden. My work can be described as fun, bold and
                colourful.
              </p>
              <p className="text-gray-600">
                With a bachelors degree from Oslo Academy Of The Arts I have a
                respect for the handicraft and a curiosity for the digital.
              </p>
              <p className="text-gray-600">
                Don&apos;t hesitate to contact me If you have any inquiries!
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 mb-12">
              <p>
                <span className="font-medium">Mail: </span>
                <a
                  href="mailto:hugosandsjo@gmail.com"
                  className="text-gray-600 hover:underline"
                >
                  hugosandsjo@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium">Phone: </span>
                <a
                  href="tel:+46707224289"
                  className="text-gray-600 hover:underline"
                >
                  +46707224289
                </a>
              </p>
              <p>
                <span className="font-medium">Instagram: </span>
                <a
                  href="https://www.instagram.com/hugosandsjo_illustration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  @hugosandsjo_illustration
                </a>
              </p>
            </div>

            {/* Selected Clients */}
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">
                Selected clients:
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>Sveriges länsstyrelser</li>
                <li>Uppsala Stadsteater</li>
                <li>Gatutidningen Faktum</li>
                <li>Sveriges Stadsmissioner</li>
                <li>Gyldendal Norsk Forlag</li>
                <li>Illustratörcentrum</li>
                <li>Antaros Medical AB</li>
              </ul>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="sticky top-8">
              <Image
                src="/images/profile.jpg"
                alt="Hugo Sandsjö"
                width={1200}
                height={1600}
                quality={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
