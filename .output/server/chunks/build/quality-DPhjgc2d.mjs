import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Container-DpXS18UO.mjs';
import 'tailwind-merge';
import './Icon-DzycYtnF.mjs';
import './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:path';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import './index-B5Wt8a7N.mjs';
import '@iconify/utils/lib/css/icon';
import './Link-D6MkXhLj.mjs';
import './nuxt-link-DT8iqv60.mjs';
import './Card-fcf5-765.mjs';
import './Avatar-hXOE5YxQ.mjs';
import './useButtonGroup-DIM86quX.mjs';
import './services-C3WPXYDX.mjs';

const _sfc_main = {
  name: "About",
  components: {
    servicesSidebar: __nuxt_component_1,
    pageHeader: __nuxt_component_0
    // cta,
  },
  data() {
    return {
      quality: [
        {
          logo: "irish-cleanroom-logo.png",
          name: "Irish Cleanroom Society"
        },
        {
          logo: "ccn-logo.png",
          name: "CCN"
        },
        {
          logo: "s2c2-logo.png",
          name: "Scottish contamination"
        },
        {
          logo: "iso-9001.png",
          name: "BS EN ISO 9001:2015 compliant"
        }
      ],
      safety: [
        {
          logo: "chas-logo.png",
          name: "CHAS"
        },
        {
          logo: "constructionline-gold-logo.png",
          name: "Construction Line"
        },
        {
          logo: "ipaf-logo.png",
          name: "IPAF"
        },
        {
          logo: "cscs-logo.png",
          name: "CSCS"
        }
      ],
      training: [
        {
          logo: "bohs-logo.png",
          name: "BOHS"
        },
        {
          logo: "ctcbi-logo.png",
          name: "CTCB-I"
        },
        {
          logo: "cityguilds-logo.png",
          name: "City & Guilds"
        }
      ]
    };
  },
  computed: {},
  head() {
    return {
      title: "Balanced Air Specialists - Cleanroom Validation and DOP Filter Testing",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_pageHeader = __nuxt_component_0;
  const _component_b_container = resolveComponent("b-container");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_services_sidebar = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-9f3d7215>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: "Quality of service",
    breadcrumb: [{ label: "Quality", url: null }]
  }, null, _parent));
  _push(`<div class="page-content" data-v-9f3d7215>`);
  _push(ssrRenderComponent(_component_b_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, { md: "9" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_row, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_col, {
                            md: "12",
                            class: "text"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h2 data-v-9f3d7215${_scopeId5}>Quality</h2><p data-v-9f3d7215${_scopeId5}> At BASCC we are always looking at ways to continually improve the service we provide to our clients and to ensure this BASCC have become Corporate members of all of the recognized cleanroom contamination society’s within the UK and Ireland. Being part of these society’s ensures we’re always kept up to date with all the revisions and changes to the relevant standards meaning we can give all of our clients the correct advice regarding the qualification and routine qualification testing required at their cleanroom facility’s. </p><p data-v-9f3d7215${_scopeId5}> BASCC are certified and operate to a BS EN ISO 9001:2015 compliant quality management system to ensure continual compliance and an external audit is performed on an annual basis </p>`);
                              } else {
                                return [
                                  createVNode("h2", null, "Quality"),
                                  createVNode("p", null, " At BASCC we are always looking at ways to continually improve the service we provide to our clients and to ensure this BASCC have become Corporate members of all of the recognized cleanroom contamination society’s within the UK and Ireland. Being part of these society’s ensures we’re always kept up to date with all the revisions and changes to the relevant standards meaning we can give all of our clients the correct advice regarding the qualification and routine qualification testing required at their cleanroom facility’s. "),
                                  createVNode("p", null, " BASCC are certified and operate to a BS EN ISO 9001:2015 compliant quality management system to ensure continual compliance and an external audit is performed on an annual basis ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_col, {
                            class: "main-images",
                            md: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList($data.quality, (company) => {
                                        _push7(ssrRenderComponent(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<img${ssrRenderAttr("src", `/imgs/logos/${company.logo}`)} class="img-fluid shadow-sm logo"${ssrRenderAttr("title", company.name)} data-v-9f3d7215${_scopeId7}>`);
                                            } else {
                                              return [
                                                createVNode("img", {
                                                  src: `/imgs/logos/${company.logo}`,
                                                  class: "img-fluid shadow-sm logo",
                                                  title: company.name
                                                }, null, 8, ["src", "title"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList($data.quality, (company) => {
                                          return openBlock(), createBlock(_component_b_col, {
                                            key: company.name,
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: `/imgs/logos/${company.logo}`,
                                                class: "img-fluid shadow-sm logo",
                                                title: company.name
                                              }, null, 8, ["src", "title"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList($data.quality, (company) => {
                                        return openBlock(), createBlock(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: `/imgs/logos/${company.logo}`,
                                              class: "img-fluid shadow-sm logo",
                                              title: company.name
                                            }, null, 8, ["src", "title"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_col, {
                              md: "12",
                              class: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", null, "Quality"),
                                createVNode("p", null, " At BASCC we are always looking at ways to continually improve the service we provide to our clients and to ensure this BASCC have become Corporate members of all of the recognized cleanroom contamination society’s within the UK and Ireland. Being part of these society’s ensures we’re always kept up to date with all the revisions and changes to the relevant standards meaning we can give all of our clients the correct advice regarding the qualification and routine qualification testing required at their cleanroom facility’s. "),
                                createVNode("p", null, " BASCC are certified and operate to a BS EN ISO 9001:2015 compliant quality management system to ensure continual compliance and an external audit is performed on an annual basis ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, {
                              class: "main-images",
                              md: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.quality, (company) => {
                                      return openBlock(), createBlock(_component_b_col, {
                                        key: company.name,
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: `/imgs/logos/${company.logo}`,
                                            class: "img-fluid shadow-sm logo",
                                            title: company.name
                                          }, null, 8, ["src", "title"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_row, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_col, {
                            md: "12",
                            class: "text"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h2 data-v-9f3d7215${_scopeId5}>Health &amp; Safety</h2><p data-v-9f3d7215${_scopeId5}> Health &amp; Safety is taken very seriously at BASCC and to ensure all of our staff are safe and working in the correct manner whilst on site they are all trained to CSCS and have all received the Emergency First Aid at work qualification. </p><p data-v-9f3d7215${_scopeId5}> BASCC are also accredited members of CHAS &amp; Constructionline ensuring all our regulations are robust and working efficiently for both our staff and clients. </p>`);
                              } else {
                                return [
                                  createVNode("h2", null, "Health & Safety"),
                                  createVNode("p", null, " Health & Safety is taken very seriously at BASCC and to ensure all of our staff are safe and working in the correct manner whilst on site they are all trained to CSCS and have all received the Emergency First Aid at work qualification. "),
                                  createVNode("p", null, " BASCC are also accredited members of CHAS & Constructionline ensuring all our regulations are robust and working efficiently for both our staff and clients. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_col, {
                            class: "main-images",
                            md: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList($data.safety, (company) => {
                                        _push7(ssrRenderComponent(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<img${ssrRenderAttr("src", `/imgs/logos/${company.logo}`)} class="img-fluid shadow-sm logo"${ssrRenderAttr("title", company.name)} data-v-9f3d7215${_scopeId7}>`);
                                            } else {
                                              return [
                                                createVNode("img", {
                                                  src: `/imgs/logos/${company.logo}`,
                                                  class: "img-fluid shadow-sm logo",
                                                  title: company.name
                                                }, null, 8, ["src", "title"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList($data.safety, (company) => {
                                          return openBlock(), createBlock(_component_b_col, {
                                            key: company.name,
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: `/imgs/logos/${company.logo}`,
                                                class: "img-fluid shadow-sm logo",
                                                title: company.name
                                              }, null, 8, ["src", "title"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList($data.safety, (company) => {
                                        return openBlock(), createBlock(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: `/imgs/logos/${company.logo}`,
                                              class: "img-fluid shadow-sm logo",
                                              title: company.name
                                            }, null, 8, ["src", "title"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_col, {
                              md: "12",
                              class: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", null, "Health & Safety"),
                                createVNode("p", null, " Health & Safety is taken very seriously at BASCC and to ensure all of our staff are safe and working in the correct manner whilst on site they are all trained to CSCS and have all received the Emergency First Aid at work qualification. "),
                                createVNode("p", null, " BASCC are also accredited members of CHAS & Constructionline ensuring all our regulations are robust and working efficiently for both our staff and clients. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, {
                              class: "main-images",
                              md: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.safety, (company) => {
                                      return openBlock(), createBlock(_component_b_col, {
                                        key: company.name,
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: `/imgs/logos/${company.logo}`,
                                            class: "img-fluid shadow-sm logo",
                                            title: company.name
                                          }, null, 8, ["src", "title"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_row, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_col, {
                            md: "12",
                            class: "text"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<h2 data-v-9f3d7215${_scopeId5}>Training</h2><p data-v-9f3d7215${_scopeId5}> BASCC continually train all of our employees and see training as a vital part of our business. All of engineers are trained by the CTCB-I &amp; The City of Guilds organization to ensure all of our engineers are performing all of the cleanroom qualification tests as per the correct methods and guidelines. </p><p data-v-9f3d7215${_scopeId5}> Having all of our engineers trained in these specialist industry related training courses ensures our clients that they are receiving a competent on site team giving them assurances for the test results provided from our specialist calibrated equipment. </p>`);
                              } else {
                                return [
                                  createVNode("h2", null, "Training"),
                                  createVNode("p", null, " BASCC continually train all of our employees and see training as a vital part of our business. All of engineers are trained by the CTCB-I & The City of Guilds organization to ensure all of our engineers are performing all of the cleanroom qualification tests as per the correct methods and guidelines. "),
                                  createVNode("p", null, " Having all of our engineers trained in these specialist industry related training courses ensures our clients that they are receiving a competent on site team giving them assurances for the test results provided from our specialist calibrated equipment. ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_col, {
                            class: "main-images",
                            md: "12"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList($data.training, (company) => {
                                        _push7(ssrRenderComponent(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<img${ssrRenderAttr("src", `/imgs/logos/${company.logo}`)} class="img-fluid shadow-sm logo"${ssrRenderAttr("title", company.name)} data-v-9f3d7215${_scopeId7}>`);
                                            } else {
                                              return [
                                                createVNode("img", {
                                                  src: `/imgs/logos/${company.logo}`,
                                                  class: "img-fluid shadow-sm logo",
                                                  title: company.name
                                                }, null, 8, ["src", "title"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent7, _scopeId6));
                                      });
                                      _push7(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList($data.training, (company) => {
                                          return openBlock(), createBlock(_component_b_col, {
                                            key: company.name,
                                            md: "3"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("img", {
                                                src: `/imgs/logos/${company.logo}`,
                                                class: "img-fluid shadow-sm logo",
                                                title: company.name
                                              }, null, 8, ["src", "title"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList($data.training, (company) => {
                                        return openBlock(), createBlock(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: `/imgs/logos/${company.logo}`,
                                              class: "img-fluid shadow-sm logo",
                                              title: company.name
                                            }, null, 8, ["src", "title"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_col, {
                              md: "12",
                              class: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode("h2", null, "Training"),
                                createVNode("p", null, " BASCC continually train all of our employees and see training as a vital part of our business. All of engineers are trained by the CTCB-I & The City of Guilds organization to ensure all of our engineers are performing all of the cleanroom qualification tests as per the correct methods and guidelines. "),
                                createVNode("p", null, " Having all of our engineers trained in these specialist industry related training courses ensures our clients that they are receiving a competent on site team giving them assurances for the test results provided from our specialist calibrated equipment. ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, {
                              class: "main-images",
                              md: "12"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.training, (company) => {
                                      return openBlock(), createBlock(_component_b_col, {
                                        key: company.name,
                                        md: "3"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: `/imgs/logos/${company.logo}`,
                                            class: "img-fluid shadow-sm logo",
                                            title: company.name
                                          }, null, 8, ["src", "title"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_col, {
                            md: "12",
                            class: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", null, "Quality"),
                              createVNode("p", null, " At BASCC we are always looking at ways to continually improve the service we provide to our clients and to ensure this BASCC have become Corporate members of all of the recognized cleanroom contamination society’s within the UK and Ireland. Being part of these society’s ensures we’re always kept up to date with all the revisions and changes to the relevant standards meaning we can give all of our clients the correct advice regarding the qualification and routine qualification testing required at their cleanroom facility’s. "),
                              createVNode("p", null, " BASCC are certified and operate to a BS EN ISO 9001:2015 compliant quality management system to ensure continual compliance and an external audit is performed on an annual basis ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, {
                            class: "main-images",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.quality, (company) => {
                                    return openBlock(), createBlock(_component_b_col, {
                                      key: company.name,
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: `/imgs/logos/${company.logo}`,
                                          class: "img-fluid shadow-sm logo",
                                          title: company.name
                                        }, null, 8, ["src", "title"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_col, {
                            md: "12",
                            class: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", null, "Health & Safety"),
                              createVNode("p", null, " Health & Safety is taken very seriously at BASCC and to ensure all of our staff are safe and working in the correct manner whilst on site they are all trained to CSCS and have all received the Emergency First Aid at work qualification. "),
                              createVNode("p", null, " BASCC are also accredited members of CHAS & Constructionline ensuring all our regulations are robust and working efficiently for both our staff and clients. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, {
                            class: "main-images",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.safety, (company) => {
                                    return openBlock(), createBlock(_component_b_col, {
                                      key: company.name,
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: `/imgs/logos/${company.logo}`,
                                          class: "img-fluid shadow-sm logo",
                                          title: company.name
                                        }, null, 8, ["src", "title"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_col, {
                            md: "12",
                            class: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", null, "Training"),
                              createVNode("p", null, " BASCC continually train all of our employees and see training as a vital part of our business. All of engineers are trained by the CTCB-I & The City of Guilds organization to ensure all of our engineers are performing all of the cleanroom qualification tests as per the correct methods and guidelines. "),
                              createVNode("p", null, " Having all of our engineers trained in these specialist industry related training courses ensures our clients that they are receiving a competent on site team giving them assurances for the test results provided from our specialist calibrated equipment. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, {
                            class: "main-images",
                            md: "12"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.training, (company) => {
                                    return openBlock(), createBlock(_component_b_col, {
                                      key: company.name,
                                      md: "3"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: `/imgs/logos/${company.logo}`,
                                          class: "img-fluid shadow-sm logo",
                                          title: company.name
                                        }, null, 8, ["src", "title"])
                                      ]),
                                      _: 2
                                    }, 1024);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_col, { md: "3" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_services_sidebar, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_services_sidebar)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, { md: "9" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_col, {
                          md: "12",
                          class: "text"
                        }, {
                          default: withCtx(() => [
                            createVNode("h2", null, "Quality"),
                            createVNode("p", null, " At BASCC we are always looking at ways to continually improve the service we provide to our clients and to ensure this BASCC have become Corporate members of all of the recognized cleanroom contamination society’s within the UK and Ireland. Being part of these society’s ensures we’re always kept up to date with all the revisions and changes to the relevant standards meaning we can give all of our clients the correct advice regarding the qualification and routine qualification testing required at their cleanroom facility’s. "),
                            createVNode("p", null, " BASCC are certified and operate to a BS EN ISO 9001:2015 compliant quality management system to ensure continual compliance and an external audit is performed on an annual basis ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, {
                          class: "main-images",
                          md: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.quality, (company) => {
                                  return openBlock(), createBlock(_component_b_col, {
                                    key: company.name,
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: `/imgs/logos/${company.logo}`,
                                        class: "img-fluid shadow-sm logo",
                                        title: company.name
                                      }, null, 8, ["src", "title"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_col, {
                          md: "12",
                          class: "text"
                        }, {
                          default: withCtx(() => [
                            createVNode("h2", null, "Health & Safety"),
                            createVNode("p", null, " Health & Safety is taken very seriously at BASCC and to ensure all of our staff are safe and working in the correct manner whilst on site they are all trained to CSCS and have all received the Emergency First Aid at work qualification. "),
                            createVNode("p", null, " BASCC are also accredited members of CHAS & Constructionline ensuring all our regulations are robust and working efficiently for both our staff and clients. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, {
                          class: "main-images",
                          md: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.safety, (company) => {
                                  return openBlock(), createBlock(_component_b_col, {
                                    key: company.name,
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: `/imgs/logos/${company.logo}`,
                                        class: "img-fluid shadow-sm logo",
                                        title: company.name
                                      }, null, 8, ["src", "title"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_row, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_col, {
                          md: "12",
                          class: "text"
                        }, {
                          default: withCtx(() => [
                            createVNode("h2", null, "Training"),
                            createVNode("p", null, " BASCC continually train all of our employees and see training as a vital part of our business. All of engineers are trained by the CTCB-I & The City of Guilds organization to ensure all of our engineers are performing all of the cleanroom qualification tests as per the correct methods and guidelines. "),
                            createVNode("p", null, " Having all of our engineers trained in these specialist industry related training courses ensures our clients that they are receiving a competent on site team giving them assurances for the test results provided from our specialist calibrated equipment. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, {
                          class: "main-images",
                          md: "12"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.training, (company) => {
                                  return openBlock(), createBlock(_component_b_col, {
                                    key: company.name,
                                    md: "3"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: `/imgs/logos/${company.logo}`,
                                        class: "img-fluid shadow-sm logo",
                                        title: company.name
                                      }, null, 8, ["src", "title"])
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_b_col, { md: "3" }, {
                  default: withCtx(() => [
                    createVNode(_component_services_sidebar)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_b_col, { md: "9" }, {
                default: withCtx(() => [
                  createVNode(_component_b_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_col, {
                        md: "12",
                        class: "text"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", null, "Quality"),
                          createVNode("p", null, " At BASCC we are always looking at ways to continually improve the service we provide to our clients and to ensure this BASCC have become Corporate members of all of the recognized cleanroom contamination society’s within the UK and Ireland. Being part of these society’s ensures we’re always kept up to date with all the revisions and changes to the relevant standards meaning we can give all of our clients the correct advice regarding the qualification and routine qualification testing required at their cleanroom facility’s. "),
                          createVNode("p", null, " BASCC are certified and operate to a BS EN ISO 9001:2015 compliant quality management system to ensure continual compliance and an external audit is performed on an annual basis ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        class: "main-images",
                        md: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList($data.quality, (company) => {
                                return openBlock(), createBlock(_component_b_col, {
                                  key: company.name,
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: `/imgs/logos/${company.logo}`,
                                      class: "img-fluid shadow-sm logo",
                                      title: company.name
                                    }, null, 8, ["src", "title"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_col, {
                        md: "12",
                        class: "text"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", null, "Health & Safety"),
                          createVNode("p", null, " Health & Safety is taken very seriously at BASCC and to ensure all of our staff are safe and working in the correct manner whilst on site they are all trained to CSCS and have all received the Emergency First Aid at work qualification. "),
                          createVNode("p", null, " BASCC are also accredited members of CHAS & Constructionline ensuring all our regulations are robust and working efficiently for both our staff and clients. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        class: "main-images",
                        md: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList($data.safety, (company) => {
                                return openBlock(), createBlock(_component_b_col, {
                                  key: company.name,
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: `/imgs/logos/${company.logo}`,
                                      class: "img-fluid shadow-sm logo",
                                      title: company.name
                                    }, null, 8, ["src", "title"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_col, {
                        md: "12",
                        class: "text"
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", null, "Training"),
                          createVNode("p", null, " BASCC continually train all of our employees and see training as a vital part of our business. All of engineers are trained by the CTCB-I & The City of Guilds organization to ensure all of our engineers are performing all of the cleanroom qualification tests as per the correct methods and guidelines. "),
                          createVNode("p", null, " Having all of our engineers trained in these specialist industry related training courses ensures our clients that they are receiving a competent on site team giving them assurances for the test results provided from our specialist calibrated equipment. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        class: "main-images",
                        md: "12"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList($data.training, (company) => {
                                return openBlock(), createBlock(_component_b_col, {
                                  key: company.name,
                                  md: "3"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: `/imgs/logos/${company.logo}`,
                                      class: "img-fluid shadow-sm logo",
                                      title: company.name
                                    }, null, 8, ["src", "title"])
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 128))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_b_col, { md: "3" }, {
                default: withCtx(() => [
                  createVNode(_component_services_sidebar)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/quality.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quality = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9f3d7215"]]);

export { quality as default };
//# sourceMappingURL=quality-DPhjgc2d.mjs.map
