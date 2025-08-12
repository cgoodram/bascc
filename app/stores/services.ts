import { defineStore } from 'pinia'

export interface Service {
  label: string
  page: string
  image: string
  snippet: string
  seo?: {
    title: string
    description: string
  }
}

export const useServicesStore = defineStore('services', () => {
  // State
  const services = ref<Service[]>([
    {
      label: 'Cleanroom Validation',
      page: '/services/cleanroom-validation',
      image: 'cleanroom-validation-small.jpg',
      snippet:
        'BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection.',
      seo: {
        title: 'Cleanroom Validation Services - Certified Specialists',
        description:
          'Cleanroom Validation - All cleanrooms must be validated and certified to operate. We offer cleanroom validation services for all cleanroom environments',
      },
    },
    {
      label: 'Clean Air Devices',
      page: '/services/clean-air-device-qualification',
      image: 'clean-air-devices-small.jpg',
      snippet:
        'BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment.',
      seo: {
        title: 'Clean Air Devices - Balanced Air Specialists',
        description:
          'BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment.',
      },
    },
    {
      label: 'KI-Discus Testing',
      page: '/services/ki-discus-operator-protection-test',
      image: 'ki-discus-testing-small.jpg',
      snippet:
        'BAS engineers have been fully trained & are certified to carry out KI Discus operator protection tests in line with BS EN12469.',
      seo: {
        title: 'KI Discus Testing - Balanced Air Specialists',
        description:
          'BAS engineers have been fully trained & are certified to carry out KI Discus operator protection tests in line with BS EN12469.',
      },
    },
    {
      label: 'Healthcare Ventilation Verification (HTM-03-01)',
      page: '/services/healthcare-ventilation-verification-htm-03-01',
      image: 'healthcare-ventilation-verification-small.jpg',
      snippet:
        'Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments.',
    },
    {
      label: 'UCV Testing (HTM-03-01)',
      page: '/services/ucv-testing-htm-03-01',
      image: 'ucv-testing-small.jpg',
      snippet:
        'We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system.',
    },
    {
      label: 'LEV Testing (Local exhaust ventilation)',
      page: '/services/lev-testing-local-exhaust-ventilation',
      image: 'lev-testing-small.jpg',
      snippet:
        'Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations.',
    },
    {
      label: 'Compressed Air Testing',
      page: '/services/compressed-air-testing',
      image: 'compressed-air-testing-small.jpg',
      snippet:
        'Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety.',
    },
    {
      label: 'Breathing Air Quality Testing',
      page: '/services/breathing-air-quality-testing',
      image: 'breathing-air-quality-testing-small.jpg',
      snippet:
        'BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014.',
    },
  ])

  // Getters
  const getServiceByPage = (page: string) => {
    return services.value.find(service => service.page === page)
  }

  const getServicesByCategory = (category: string) => {
    // You can add category logic here if needed
    return services.value
  }

  // Actions
  const addService = (service: Service) => {
    services.value.push(service)
  }

  const updateService = (page: string, updates: Partial<Service>) => {
    const index = services.value.findIndex(service => service.page === page)
    if (index !== -1) {
      services.value[index] = { ...services.value[index], ...updates }
    }
  }

  const removeService = (page: string) => {
    const index = services.value.findIndex(service => service.page === page)
    if (index !== -1) {
      services.value.splice(index, 1)
    }
  }

  return {
    // State
    services: readonly(services),
    
    // Getters
    getServiceByPage,
    getServicesByCategory,
    
    // Actions
    addService,
    updateService,
    removeService
  }
})
