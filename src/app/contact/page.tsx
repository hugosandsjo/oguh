export default function ContactPage() {
  return (
    <div className="p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-medium tracking-tight mb-12">About</h1>

        {/* About Text */}
        <div className="prose max-w-none mb-12">
          <p className="text-gray-600 leading-relaxed">
            Hi! I'm Hugo Sandsjö, illustrator and motion designer based in
            Gothenburg, Sweden. My work can be described as fun, bold and
            colourful. With a bachelors degree from Oslo Academy Of The Arts I
            have a respect for the handicraft and a curiosity for the digital.
            Don't hesitate to contact me If you have any inquiries!
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-2 mb-12">
          <p className="text-gray-600">
            <strong className="text-black font-medium">Mail:</strong>{" "}
            <a href="mailto:hugosandsjo@gmail.com" className="hover:underline">
              hugosandsjo@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            <strong className="text-black font-medium">Phone:</strong>{" "}
            <a href="tel:+46707224289" className="hover:underline">
              +46707224289
            </a>
          </p>
          <p className="text-gray-600">
            <strong className="text-black font-medium">Instagram:</strong>{" "}
            <a
              href="https://instagram.com/im.oguh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @im.oguh
            </a>
          </p>
        </div>

        {/* Selected Clients */}
        <div>
          <h2 className="text-2xl font-light tracking-tight mb-6">
            Selected clients
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
    </div>
  );
}
