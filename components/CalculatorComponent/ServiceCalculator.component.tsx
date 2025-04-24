"use client";

import { useState, useEffect } from 'react';
import s from './ServiceCalculator.module.scss';
import AnimationWrapper from '@/components/Utils/AnimationWrapper/AnimationWrapper.component';

const serviceIcons: Record<string, string> = {
  repair: "🔧",
  maintenance: "🛠️",
  network: "🌐",
  security: "🔒",
  software: "💿"
};

const urgencyIcons: Record<string, string> = {
  normal: "⏱️",
  high: "⚡",
  urgent: "🔥"
};

const translations = {
  category: "Calculadora",
  title: "Calcula el coste de nuestros servicios",
  description: "Utiliza nuestra calculadora para obtener un presupuesto estimado de tus necesidades informáticas. Selecciona los servicios que necesitas y obtén un precio aproximado al instante.",
  formTitle: "Selecciona tus servicios",
  serviceType: "Tipo de servicio",
  serviceOptions: [
    { value: "repair", label: "Reparación de ordenadores", price: 60 },
    { value: "maintenance", label: "Mantenimiento preventivo", price: 45 },
    { value: "network", label: "Configuración de red", price: 80 },
    { value: "security", label: "Instalación de seguridad", price: 75 },
    { value: "software", label: "Instalación de software", price: 40 }
  ],
  quantity: "Cantidad de equipos",
  urgency: "Nivel de urgencia",
  urgencyOptions: [
    { value: "normal", label: "Normal (48h)", multiplier: 1 },
    { value: "high", label: "Alta (24h)", multiplier: 1.3 },
    { value: "urgent", label: "Urgente (12h)", multiplier: 1.5 }
  ],
  calculate: "Calcular presupuesto",
  resultTitle: "Tu presupuesto estimado",
  basePrice: "Precio base",
  urgencyFee: "Cargo por urgencia",
  deviceMultiplier: "Multiplicador por dispositivos",
  total: "Total a pagar",
  currency: "€",
  recalculate: "Recalcular",
  selectedService: "Servicio seleccionado",
  selectedUrgency: "Urgencia seleccionada",
  calculatingMessage: "Calculando...",
};

function ServiceCalculator() {
  const [serviceType, setServiceType] = useState(translations.serviceOptions[0].value);
  const [quantity, setQuantity] = useState(1);
  const [urgency, setUrgency] = useState(translations.urgencyOptions[0].value);
  const [calculatedPrice, setCalculatedPrice] = useState({
    basePrice: translations.serviceOptions[0].price,
    urgencyFee: 0,
    deviceMultiplier: 0,
    total: translations.serviceOptions[0].price
  });
  const [isCalculated, setIsCalculated] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [selectedServiceLabel, setSelectedServiceLabel] = useState(translations.serviceOptions[0].label);
  const [selectedUrgencyLabel, setSelectedUrgencyLabel] = useState(translations.urgencyOptions[0].label);

  useEffect(() => {
    const serviceOption = translations.serviceOptions.find(option => option.value === serviceType);
    if (serviceOption) {
      setSelectedServiceLabel(serviceOption.label);
    }
  }, [serviceType]);

  useEffect(() => {
    const urgencyOption = translations.urgencyOptions.find(option => option.value === urgency);
    if (urgencyOption) {
      setSelectedUrgencyLabel(urgencyOption.label);
    }
  }, [urgency]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsCalculating(true);
    
    setTimeout(() => {
      const selectedService = translations.serviceOptions.find(option => option.value === serviceType);
      const selectedUrgency = translations.urgencyOptions.find(option => option.value === urgency);
      
      if (selectedService && selectedUrgency) {
        const basePrice = selectedService.price;
        let deviceMultiplier = 0;
        
        if (quantity > 1) {
          deviceMultiplier = basePrice * 0.8 * (quantity - 1);
        }
        
        const urgencyFee = basePrice * (selectedUrgency.multiplier - 1);
        
        const total = (basePrice + deviceMultiplier) * selectedUrgency.multiplier;
        
        setCalculatedPrice({
          basePrice,
          urgencyFee,
          deviceMultiplier,
          total
        });
        
        setIsCalculated(true);
        setIsCalculating(false);
      }
    }, 800);
  };

  return (
    <section id="calculator" className={s.container}>
      <section className={s.container__header}>
        <span className={s.container__header__category}>{translations.category}</span>
        <h2 className={s.container__header__title}>{translations.title}</h2>
        <p className={s.container__header__description}>{translations.description}</p>
      </section>
      
      <AnimationWrapper className={s.container__calculatorWrapper}>
        <form className={s.container__form} onSubmit={handleCalculate}>
          <h3 className={s.container__form__title}>{translations.formTitle}</h3>
          
          <div className={s.container__form__group}>
            <label className={s.container__form__group__label}>{translations.serviceType}</label>
            <select 
              className={s.container__form__group__select}
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              disabled={isCalculating}
            >
              {translations.serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {serviceIcons[option.value]} {option.label} ({option.price} {translations.currency})
                </option>
              ))}
            </select>
          </div>
          
          <div className={s.container__form__group}>
            <label className={s.container__form__group__label}>{translations.quantity}</label>
            <input 
              type="number" 
              min="1" 
              max="20"
              className={s.container__form__group__input}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              disabled={isCalculating}
            />
          </div>
          
          <div className={s.container__form__group}>
            <label className={s.container__form__group__label}>{translations.urgency}</label>
            <select 
              className={s.container__form__group__select}
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              disabled={isCalculating}
            >
              {translations.urgencyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {urgencyIcons[option.value]} {option.label} (x{option.multiplier})
                </option>
              ))}
            </select>
          </div>
          
          <button 
            type="submit" 
            className={s.container__form__button}
            disabled={isCalculating}
          >
            {isCalculating ? translations.calculatingMessage : (isCalculated ? translations.recalculate : translations.calculate)}
          </button>
        </form>
        
        {isCalculated && (
          <div className={s.container__result}>
            <h3 className={s.container__result__title}>{translations.resultTitle}</h3>
            
            <div className={s.container__result__item}>
              <span className={s.container__result__item__label}>{translations.selectedService}</span>
              <span className={s.container__result__item__value}>
                {serviceIcons[serviceType]} {selectedServiceLabel}
              </span>
            </div>
            
            {quantity > 1 && (
              <div className={s.container__result__item}>
                <span className={s.container__result__item__label}>{translations.quantity}</span>
                <span className={s.container__result__item__value}>
                  {quantity} {quantity === 1 ? "equipo" : "equipos"}
                </span>
              </div>
            )}
            
            <div className={s.container__result__item}>
              <span className={s.container__result__item__label}>{translations.selectedUrgency}</span>
              <span className={s.container__result__item__value}>
                {urgencyIcons[urgency]} {selectedUrgencyLabel}
              </span>
            </div>
            
            <div className={s.container__result__item}>
              <span className={s.container__result__item__label}>{translations.basePrice}</span>
              <span className={s.container__result__item__value}>
                {calculatedPrice.basePrice.toFixed(2)} {translations.currency}
              </span>
            </div>
            
            {calculatedPrice.deviceMultiplier > 0 && (
              <div className={s.container__result__item}>
                <span className={s.container__result__item__label}>{translations.deviceMultiplier}</span>
                <span className={s.container__result__item__value}>
                  {calculatedPrice.deviceMultiplier.toFixed(2)} {translations.currency}
                </span>
              </div>
            )}
            
            {calculatedPrice.urgencyFee > 0 && (
              <div className={s.container__result__item}>
                <span className={s.container__result__item__label}>{translations.urgencyFee}</span>
                <span className={s.container__result__item__value}>
                  {calculatedPrice.urgencyFee.toFixed(2)} {translations.currency}
                </span>
              </div>
            )}
            
            <div className={s.container__result__total}>
              <span className={s.container__result__total__label}>{translations.total}</span>
              <span className={s.container__result__total__value}>
                {calculatedPrice.total.toFixed(2)} {translations.currency}
              </span>
            </div>
          </div>
        )}
      </AnimationWrapper>
    </section>
  );
}

export default ServiceCalculator; 