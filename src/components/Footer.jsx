function Footer() {
  return (
    <footer className="bg-[#6B1E3B] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Suvaikoodal
          </h2>

          <p className="text-gray-200">
            Healthy Homemade Snacks prepared with love using
            traditional recipes and quality ingredients.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li><a href="/">Home</a></li>
            <li><a href="/healthy-snacks">Healthy Snacks</a></li>
            <li><a href="/homemade-podi">Homemade Podi</a></li>
            <li><a href="/combo-packs">Combo Packs</a></li>
            <li><a href="/return-gifts">Return Gifts</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📍 Thiruporur, Chennai</p>

          <p className="mt-2">
            📱 +91 7200592175
          </p>

          <p className="mt-2">
            📸 @suvaikoodal_healthyfoods
          </p>

          <p className="mt-2">
            🥜 Healthy • Homemade • Fresh
          </p>
        </div>

      </div>

      <div className="border-t border-white/20 py-5 text-center text-sm">
        © 2026 Suvaikoodal Healthy Snacks. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;