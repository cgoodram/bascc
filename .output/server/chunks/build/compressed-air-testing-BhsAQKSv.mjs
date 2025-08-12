import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { _ as __nuxt_component_2 } from './cta-B1u54W-w.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../_/nitro.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import './Container-DpXS18UO.mjs';
import 'tailwind-merge';
import './Icon-DzycYtnF.mjs';
import './server.mjs';
import 'vue-router';
import '@vueuse/core';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
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
import './index-B5Wt8a7N.mjs';
import '@iconify/utils/lib/css/icon';
import './Link-D6MkXhLj.mjs';
import './nuxt-link-DT8iqv60.mjs';
import './Card-fcf5-765.mjs';
import './Avatar-hXOE5YxQ.mjs';
import './useButtonGroup-DIM86quX.mjs';
import './services-C3WPXYDX.mjs';
import './Button-DLq0kSUH.mjs';

const _imports_0 = publicAssetsURL("/imgs/compressed-air-testing/1.jpg");
const _sfc_main = {
  name: "Services",
  components: {
    servicesSidebar: __nuxt_component_1,
    pageHeader: __nuxt_component_0,
    cta: __nuxt_component_2
  },
  data() {
    return {};
  },
  computed: {
    getCurrentPageMeta() {
      return this.$store.state.services.find(
        (obj) => obj.page === this.$route.path
      );
    }
  },
  head() {
    return {
      title: this.getCurrentPageMeta.seo ? this.getCurrentPageMeta.seo.title : "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.getCurrentPageMeta.seo ? this.getCurrentPageMeta.seo.description : ""
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.getCurrentPageMeta.seo ? this.getCurrentPageMeta.seo.description : ""
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
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  const _component_services_sidebar = __nuxt_component_1;
  const _component_cta = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-41b36efc>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: $options.getCurrentPageMeta.label, url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-41b36efc>`);
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
                            order: "2"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<p data-v-41b36efc${_scopeId5}> Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. </p><p data-v-41b36efc${_scopeId5}> The most stringent hygiene standards are required during the production of pharmaceutical products where compressed air is used in the processes both directly and indirectly. This air must be 100% free of oil and particulates to avoid any form of contamination to the sensitive products.This is why it is critical to ensure the regular testing of all compressed air systems that are used in the manufacturer of the pharmaceutical products to ensure the quality and integrity of the product. </p><p data-v-41b36efc${_scopeId5}> For applications where the quality of compressed air is classed as critical and requires validation to the ISO8573 standard, then BASCC can provide regular air quality testing to ensure that you are, and remain, compliant with current regulations and advisory standards for Compressed Air Quality. </p><p data-v-41b36efc${_scopeId5}> Our certified testing engineers can attend your site with our calibrated air quality test kit allowing us to measure the quality of the compressed air line and validate quality parameters of the following: </p><ul class="no-style chevrons" data-v-41b36efc${_scopeId5}><li data-v-41b36efc${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Particle Purity. </li><li data-v-41b36efc${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Dew Point. </li><li data-v-41b36efc${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Oil vapour content. </li></ul><p data-v-41b36efc${_scopeId5}> On completion of all testing a detailed test report for each compressed air system will be prepared confirming whether each system is ‘Fit for Purpose’ or has met the required class as per the ISO 8573-1 2010 </p>`);
                              } else {
                                return [
                                  createVNode("p", null, " Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. "),
                                  createVNode("p", null, " The most stringent hygiene standards are required during the production of pharmaceutical products where compressed air is used in the processes both directly and indirectly. This air must be 100% free of oil and particulates to avoid any form of contamination to the sensitive products.This is why it is critical to ensure the regular testing of all compressed air systems that are used in the manufacturer of the pharmaceutical products to ensure the quality and integrity of the product. "),
                                  createVNode("p", null, " For applications where the quality of compressed air is classed as critical and requires validation to the ISO8573 standard, then BASCC can provide regular air quality testing to ensure that you are, and remain, compliant with current regulations and advisory standards for Compressed Air Quality. "),
                                  createVNode("p", null, " Our certified testing engineers can attend your site with our calibrated air quality test kit allowing us to measure the quality of the compressed air line and validate quality parameters of the following: "),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Particle Purity. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Dew Point. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Oil vapour content. ")
                                    ])
                                  ]),
                                  createVNode("p", null, " On completion of all testing a detailed test report for each compressed air system will be prepared confirming whether each system is ‘Fit for Purpose’ or has met the required class as per the ISO 8573-1 2010 ")
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
                                      _push7(ssrRenderComponent(_component_b_col, { md: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-41b36efc${_scopeId7}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: _imports_0,
                                                class: "img-fluid shadow-sm"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_b_col, { md: "12" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_0,
                                              class: "img-fluid shadow-sm"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_b_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_b_col, { md: "12" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            class: "img-fluid shadow-sm"
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
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_col, {
                              md: "12",
                              class: "text",
                              order: "2"
                            }, {
                              default: withCtx(() => [
                                createVNode("p", null, " Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. "),
                                createVNode("p", null, " The most stringent hygiene standards are required during the production of pharmaceutical products where compressed air is used in the processes both directly and indirectly. This air must be 100% free of oil and particulates to avoid any form of contamination to the sensitive products.This is why it is critical to ensure the regular testing of all compressed air systems that are used in the manufacturer of the pharmaceutical products to ensure the quality and integrity of the product. "),
                                createVNode("p", null, " For applications where the quality of compressed air is classed as critical and requires validation to the ISO8573 standard, then BASCC can provide regular air quality testing to ensure that you are, and remain, compliant with current regulations and advisory standards for Compressed Air Quality. "),
                                createVNode("p", null, " Our certified testing engineers can attend your site with our calibrated air quality test kit allowing us to measure the quality of the compressed air line and validate quality parameters of the following: "),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Particle Purity. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Dew Point. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Oil vapour content. ")
                                  ])
                                ]),
                                createVNode("p", null, " On completion of all testing a detailed test report for each compressed air system will be prepared confirming whether each system is ‘Fit for Purpose’ or has met the required class as per the ISO 8573-1 2010 ")
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
                                    createVNode(_component_b_col, { md: "12" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          class: "img-fluid shadow-sm"
                                        })
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
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_row, null, {
                        default: withCtx(() => [
                          createVNode(_component_b_col, {
                            md: "12",
                            class: "text",
                            order: "2"
                          }, {
                            default: withCtx(() => [
                              createVNode("p", null, " Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. "),
                              createVNode("p", null, " The most stringent hygiene standards are required during the production of pharmaceutical products where compressed air is used in the processes both directly and indirectly. This air must be 100% free of oil and particulates to avoid any form of contamination to the sensitive products.This is why it is critical to ensure the regular testing of all compressed air systems that are used in the manufacturer of the pharmaceutical products to ensure the quality and integrity of the product. "),
                              createVNode("p", null, " For applications where the quality of compressed air is classed as critical and requires validation to the ISO8573 standard, then BASCC can provide regular air quality testing to ensure that you are, and remain, compliant with current regulations and advisory standards for Compressed Air Quality. "),
                              createVNode("p", null, " Our certified testing engineers can attend your site with our calibrated air quality test kit allowing us to measure the quality of the compressed air line and validate quality parameters of the following: "),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Particle Purity. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Dew Point. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Oil vapour content. ")
                                ])
                              ]),
                              createVNode("p", null, " On completion of all testing a detailed test report for each compressed air system will be prepared confirming whether each system is ‘Fit for Purpose’ or has met the required class as per the ISO 8573-1 2010 ")
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
                                  createVNode(_component_b_col, { md: "12" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "img-fluid shadow-sm"
                                      })
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
                          order: "2"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", null, " Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. "),
                            createVNode("p", null, " The most stringent hygiene standards are required during the production of pharmaceutical products where compressed air is used in the processes both directly and indirectly. This air must be 100% free of oil and particulates to avoid any form of contamination to the sensitive products.This is why it is critical to ensure the regular testing of all compressed air systems that are used in the manufacturer of the pharmaceutical products to ensure the quality and integrity of the product. "),
                            createVNode("p", null, " For applications where the quality of compressed air is classed as critical and requires validation to the ISO8573 standard, then BASCC can provide regular air quality testing to ensure that you are, and remain, compliant with current regulations and advisory standards for Compressed Air Quality. "),
                            createVNode("p", null, " Our certified testing engineers can attend your site with our calibrated air quality test kit allowing us to measure the quality of the compressed air line and validate quality parameters of the following: "),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Particle Purity. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Dew Point. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Oil vapour content. ")
                              ])
                            ]),
                            createVNode("p", null, " On completion of all testing a detailed test report for each compressed air system will be prepared confirming whether each system is ‘Fit for Purpose’ or has met the required class as per the ISO 8573-1 2010 ")
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
                                createVNode(_component_b_col, { md: "12" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "img-fluid shadow-sm"
                                    })
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
                        order: "2"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", null, " Compressed air is a critical utility used widely throughout the pharmaceutical, Food, or electronics production environments and it is vitally important for quality, health and safety. "),
                          createVNode("p", null, " The most stringent hygiene standards are required during the production of pharmaceutical products where compressed air is used in the processes both directly and indirectly. This air must be 100% free of oil and particulates to avoid any form of contamination to the sensitive products.This is why it is critical to ensure the regular testing of all compressed air systems that are used in the manufacturer of the pharmaceutical products to ensure the quality and integrity of the product. "),
                          createVNode("p", null, " For applications where the quality of compressed air is classed as critical and requires validation to the ISO8573 standard, then BASCC can provide regular air quality testing to ensure that you are, and remain, compliant with current regulations and advisory standards for Compressed Air Quality. "),
                          createVNode("p", null, " Our certified testing engineers can attend your site with our calibrated air quality test kit allowing us to measure the quality of the compressed air line and validate quality parameters of the following: "),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Particle Purity. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Dew Point. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Oil vapour content. ")
                            ])
                          ]),
                          createVNode("p", null, " On completion of all testing a detailed test report for each compressed air system will be prepared confirming whether each system is ‘Fit for Purpose’ or has met the required class as per the ISO 8573-1 2010 ")
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
                              createVNode(_component_b_col, { md: "12" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "img-fluid shadow-sm"
                                  })
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
  _push(`</div>`);
  _push(ssrRenderComponent(_component_cta, { "cta-text": "Get a Compressed Air Test quote" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/compressed-air-testing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const compressedAirTesting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-41b36efc"]]);

export { compressedAirTesting as default };
//# sourceMappingURL=compressed-air-testing-BhsAQKSv.mjs.map
