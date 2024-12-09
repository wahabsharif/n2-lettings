import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <section className="w-[95%] mx-auto my-8">
      <div className="h-96 w-full border rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps?q=30+Monarch+Parade,+London+Road,+Mitcham,+CR4+3HA&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default GoogleMap;
