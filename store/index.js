export const state = () => ({
  services: [
    {
      label: 'Cleanroom Validation',
      page: '/cleanroom-validation',
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
      page: '/clean-air-device-qualification',
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
      page: '/ki-discus-operator-protection-test',
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
      page: '/healthcare-ventilation-verification-htm-03-01',
      image: 'healthcare-ventilation-verification-small.jpg',
      snippet:
        'Our specialist engineers are all certified by the City & Guilds (HTM-03) and can provide all your testing requirements for both non-critical & critical environments. ',
    },
    {
      label: 'UCV Testing (HTM-03-01)',
      page: '/ucv-testing-htm-03-01',
      image: 'ucv-testing-small.jpg',
      snippet:
        'We can perform your regular verification testing and servicing to ensure the safe and efficient operation of your UCV system.',
    },
    {
      label: 'LEV Testing (Local exhaust ventilation)',
      page: '/lev-testing-local-exhaust-ventilation',
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
  news: [
    {
      title: 'This is the title',
      description:
        '<p>A word from AstraZeneca</p><quote>Dear All,<br/>Thank you so much for jumping on this so quickly. Your intervention will directly support our combined efforts to deliver 30M doses to the UK population by September as announced in the 10 Downing Street press conference on Sunday.<br/>It is acts like this that make the impossible possible.</quote>',
      imageUrl: '/imgs/news/astrazeneca.jpg',
      posted: '16th January 2021',
      live: true,
      slug: 'this-is-a-test',
    },
  ],
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}
