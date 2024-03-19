import React from "react";

export default function Footer() {
  const year = new Date().getFullYear(); // Get current year

  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-center">
            <div className="text-gray-400 text-sm">
              &copy; {year} Meuspradas.pt. Todos os direitos reservados
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
