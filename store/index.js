export const state = () => ({
  services: [
    {
      label: 'Cleanroom Validation',
      page: '/cleanroom-validation',
      image: 'cleanroom-validation-small.jpg',
      snippet:
        'BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection.',
    },
    {
      label: 'Clean Air Devices',
      page: '/clean-air-devices',
      image: 'clean-air-devices-small.jpg',
      snippet:
        'BASCC validation engineers can perform all the required routine qualification tests on all types of clean air device equipment.',
    },
    {
      label: 'KI-Discus Testing',
      page: '/ki-discus-testing',
      image: 'ki-discus-testing-small.jpg',
      snippet:
        'BAS engineers have been fully trained & are certified to carry out KI Discus operator protection tests in line with BS EN12469.',
    },
    {
      label: 'Healthcare Ventilation Verification',
      page: '/healthcare-ventilation-verification',
      image: 'healthcare-ventilation-verification-small.jpg',
      snippet:
        'Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. ',
    },
    {
      label: 'UCV Testing',
      page: '/ucv-testing',
      image: 'ucv-testing-small.jpg',
      snippet:
        'We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system.',
    },
    {
      label: 'LEV Testing',
      page: '/lev-testing',
      image: 'lev-testing-small.jpg',
      snippet:
        'Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations.',
    },
    {
      label: 'Compressed Air Testing',
      page: '/compressed-air-testing',
      image: 'compressed-air-testing-small.jpg',
      snippet:
        'Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. ',
    },
    {
      label: 'Breathing Air Quality Testing',
      page: '/breathing-air-quality-testing',
      image: 'breathing-air-quality-testing-small.jpg',
      snippet:
        'BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014.',
    },
  ],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}
