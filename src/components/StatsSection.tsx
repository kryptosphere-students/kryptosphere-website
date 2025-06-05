
import React from 'react';

const StatsSection = () => {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            KRYPTOSPHERE EN QUELQUES CHIFFRES
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl text-slate-700">
            <span>Le réseau étudiant de la Tech</span>
            <div className="flex gap-1">
              <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-white border border-blue-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">+22</div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Présence dans plus de 22 établissements d'enseignement supérieur (écoles d'ingénieurs, de commerce, d'informatique, universités...)
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">+800</div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Nombre de membres actifs et alumni dans le réseau Kryptosphere
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">3</div>
            <p className="text-lg text-slate-700 leading-relaxed">
              Avec une présence dans plus de 3 pays, Kryptosphere est positionnée comme leader en Europe sur les sujets Tech
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
