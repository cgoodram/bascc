import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList } from 'vue';
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
      companiesList: [
        {
          logo: "astrazeneca-logo.png",
          name: "Astra Zeneca (UK & EU)"
        },
        {
          logo: "sanofi-logo.png",
          name: "Sanofi"
        },
        {
          logo: "baxter-logo.png",
          name: "Baxter Healthcare LTD"
        },
        {
          logo: "seqirus-logo.png",
          name: "Seqirus Vaccines"
        },
        {
          logo: "gsk-logo.png",
          name: "GSK"
        },
        {
          logo: "teva-logo.png",
          name: "TEVA"
        },
        {
          logo: "wockhardt-logo.png",
          name: "Wockhardt UK"
        },
        {
          logo: "catapult-logo.png",
          name: "Catapult"
        },
        {
          logo: "reckitt-benckiser-logo.png",
          name: "Reckitt Benckiser"
        },
        {
          logo: "rolls-royce-logo.png",
          name: "Rolls-Royce"
        },
        {
          logo: "airbus-logo.png",
          name: "Airbus"
        },
        {
          logo: "nhs-logo.png",
          name: "NHS"
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-0a33ce13>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: "About Balanced Air Specialists",
    breadcrumb: [{ label: "About", url: null }]
  }, null, _parent));
  _push(`<div class="page-content" data-v-0a33ce13>`);
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
                            class: "text",
                            order: "0"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-0a33ce13${_scopeId5}> BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. </p><p data-v-0a33ce13${_scopeId5}> We offer a National, European and Worldwide service and can validate your cleanroom facilities and localised clean air devices to confirm that your cleanroom or clean air device is operating in compliance with all the current regulatory cleanroom standards (ISO/BS/EN/NSF). This gives our clients not only the assurances required for their products being manufactured within the areas, but also for their operators using the clean air device equipment. </p><p data-v-0a33ce13${_scopeId5}> Our experienced and accredited CTCB-I/HTM-03 trained qualification engineers will use state-of-the-art calibrated testing equipment, then upon completion of testing all the test results will be recorded in an auditable written test report. This service can be provided for the initial build phase of the facility and then to ensure your cleanroom always meets the required industry standards we can also provide a periodic qualification service which can be tailored to suit each individual clients requirements. </p><p data-v-0a33ce13${_scopeId5}> BASCC have been part of some major projects in the recent years and have worked in collaboration with such companies as: </p>`);
                              } else {
                                return [
                                  createVNode("p", null, " BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "),
                                  createVNode("p", null, " We offer a National, European and Worldwide service and can validate your cleanroom facilities and localised clean air devices to confirm that your cleanroom or clean air device is operating in compliance with all the current regulatory cleanroom standards (ISO/BS/EN/NSF). This gives our clients not only the assurances required for their products being manufactured within the areas, but also for their operators using the clean air device equipment. "),
                                  createVNode("p", null, " Our experienced and accredited CTCB-I/HTM-03 trained qualification engineers will use state-of-the-art calibrated testing equipment, then upon completion of testing all the test results will be recorded in an auditable written test report. This service can be provided for the initial build phase of the facility and then to ensure your cleanroom always meets the required industry standards we can also provide a periodic qualification service which can be tailored to suit each individual clients requirements. "),
                                  createVNode("p", null, " BASCC have been part of some major projects in the recent years and have worked in collaboration with such companies as: ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_b_col, {
                            class: "main-images",
                            md: "12",
                            order: "1"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_b_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`<!--[-->`);
                                      ssrRenderList($data.companiesList, (company) => {
                                        _push7(ssrRenderComponent(_component_b_col, {
                                          key: company.name,
                                          md: "3"
                                        }, {
                                          default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                            if (_push8) {
                                              _push8(`<img${ssrRenderAttr("src", `/imgs/logos/${company.logo}`)} class="img-fluid shadow-sm logo"${ssrRenderAttr("title", company.name)} data-v-0a33ce13${_scopeId7}>`);
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
                                        (openBlock(true), createBlock(Fragment, null, renderList($data.companiesList, (company) => {
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
                                      (openBlock(true), createBlock(Fragment, null, renderList($data.companiesList, (company) => {
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
                              class: "text",
                              order: "0"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, " BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "),
                                createVNode("p", null, " We offer a National, European and Worldwide service and can validate your cleanroom facilities and localised clean air devices to confirm that your cleanroom or clean air device is operating in compliance with all the current regulatory cleanroom standards (ISO/BS/EN/NSF). This gives our clients not only the assurances required for their products being manufactured within the areas, but also for their operators using the clean air device equipment. "),
                                createVNode("p", null, " Our experienced and accredited CTCB-I/HTM-03 trained qualification engineers will use state-of-the-art calibrated testing equipment, then upon completion of testing all the test results will be recorded in an auditable written test report. This service can be provided for the initial build phase of the facility and then to ensure your cleanroom always meets the required industry standards we can also provide a periodic qualification service which can be tailored to suit each individual clients requirements. "),
                                createVNode("p", null, " BASCC have been part of some major projects in the recent years and have worked in collaboration with such companies as: ")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_b_col, {
                              class: "main-images",
                              md: "12",
                              order: "1"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_row, null, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList($data.companiesList, (company) => {
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
                            class: "text",
                            order: "0"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, " BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "),
                              createVNode("p", null, " We offer a National, European and Worldwide service and can validate your cleanroom facilities and localised clean air devices to confirm that your cleanroom or clean air device is operating in compliance with all the current regulatory cleanroom standards (ISO/BS/EN/NSF). This gives our clients not only the assurances required for their products being manufactured within the areas, but also for their operators using the clean air device equipment. "),
                              createVNode("p", null, " Our experienced and accredited CTCB-I/HTM-03 trained qualification engineers will use state-of-the-art calibrated testing equipment, then upon completion of testing all the test results will be recorded in an auditable written test report. This service can be provided for the initial build phase of the facility and then to ensure your cleanroom always meets the required industry standards we can also provide a periodic qualification service which can be tailored to suit each individual clients requirements. "),
                              createVNode("p", null, " BASCC have been part of some major projects in the recent years and have worked in collaboration with such companies as: ")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_b_col, {
                            class: "main-images",
                            md: "12",
                            order: "1"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_row, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList($data.companiesList, (company) => {
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
                          class: "text",
                          order: "0"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, " BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "),
                            createVNode("p", null, " We offer a National, European and Worldwide service and can validate your cleanroom facilities and localised clean air devices to confirm that your cleanroom or clean air device is operating in compliance with all the current regulatory cleanroom standards (ISO/BS/EN/NSF). This gives our clients not only the assurances required for their products being manufactured within the areas, but also for their operators using the clean air device equipment. "),
                            createVNode("p", null, " Our experienced and accredited CTCB-I/HTM-03 trained qualification engineers will use state-of-the-art calibrated testing equipment, then upon completion of testing all the test results will be recorded in an auditable written test report. This service can be provided for the initial build phase of the facility and then to ensure your cleanroom always meets the required industry standards we can also provide a periodic qualification service which can be tailored to suit each individual clients requirements. "),
                            createVNode("p", null, " BASCC have been part of some major projects in the recent years and have worked in collaboration with such companies as: ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_b_col, {
                          class: "main-images",
                          md: "12",
                          order: "1"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_row, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList($data.companiesList, (company) => {
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
                        class: "text",
                        order: "0"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, " BAS Cleanroom Commissioning LTD are an independent cleanroom and clean air device qualification provider for sectors such as the Pharmaceutical, Semi-Conductor, Aerospace and Healthcare. "),
                          createVNode("p", null, " We offer a National, European and Worldwide service and can validate your cleanroom facilities and localised clean air devices to confirm that your cleanroom or clean air device is operating in compliance with all the current regulatory cleanroom standards (ISO/BS/EN/NSF). This gives our clients not only the assurances required for their products being manufactured within the areas, but also for their operators using the clean air device equipment. "),
                          createVNode("p", null, " Our experienced and accredited CTCB-I/HTM-03 trained qualification engineers will use state-of-the-art calibrated testing equipment, then upon completion of testing all the test results will be recorded in an auditable written test report. This service can be provided for the initial build phase of the facility and then to ensure your cleanroom always meets the required industry standards we can also provide a periodic qualification service which can be tailored to suit each individual clients requirements. "),
                          createVNode("p", null, " BASCC have been part of some major projects in the recent years and have worked in collaboration with such companies as: ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_col, {
                        class: "main-images",
                        md: "12",
                        order: "1"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_row, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList($data.companiesList, (company) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0a33ce13"]]);

export { about as default };
//# sourceMappingURL=about-D2K8uNE4.mjs.map
