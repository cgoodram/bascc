import { _ as __nuxt_component_0 } from './pageHeader-ChVEVLUl.mjs';
import { _ as __nuxt_component_1 } from './servicesSidebar-yVoXVebJ.mjs';
import { _ as __nuxt_component_2 } from './cta-B1u54W-w.mjs';
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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

const _imports_0 = publicAssetsURL("/imgs/breathing-air-quality-testing/1.jpg");
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
  const _component_services_sidebar = __nuxt_component_1;
  const _component_cta = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-ae58cdf9>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: $options.getCurrentPageMeta.label, url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-ae58cdf9>`);
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
                                _push6(`<p data-v-ae58cdf9${_scopeId5}> Compressed air for air fed helmets and masks originates from a compressor system and is filtered in a multistage breathing air filter. As the air fed helmet or mask wearer’s life and health depend on the air supplied by the compressor, you should ensure that the air supplied meets the quality requirements in British Standard BS EN 12021:2014. This states that breathing air should not contain any contaminants at a concentration which can cause toxic or harmful effects and in any event contaminants should be as low as possible and no greater than specified within the standard. </p><p data-v-ae58cdf9${_scopeId5}> As an employer, there is a clear responsibility under the requirements of the HSE and It is a legal requirement to ensure that the quality of breathable air being supplied to an operator is at a suitable standard providing fit for purpose safety equipment for all employees that may work in an environment or carry out a process, which may be hazardous to the employee’s health. This applies to both abrasive blasting and paint spraying activities. </p><p data-v-ae58cdf9${_scopeId5}><strong data-v-ae58cdf9${_scopeId5}>COSHH regulations state that ‘testing should be conducted at least once every 3 months</strong></p><p data-v-ae58cdf9${_scopeId5}> BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014. </p><p data-v-ae58cdf9${_scopeId5}> You should base the frequency of such tests on a risk assessment, but they should take place at least every three months, and more often when the quality of air cannot be assured to these levels. As part of the risk assessment, if a mobile compressor is being used consideration should be given as to how often the air supply should be checked when the compressor is moved. </p><p data-v-ae58cdf9${_scopeId5}> On completion of all testing a detailed report for each respiratory system will be prepared confirming whether the equipment is ‘Fit for Purpose’ and complies to the requirements stated in BS EN 12021:2014. </p>`);
                              } else {
                                return [
                                  createVNode("p", null, " Compressed air for air fed helmets and masks originates from a compressor system and is filtered in a multistage breathing air filter. As the air fed helmet or mask wearer’s life and health depend on the air supplied by the compressor, you should ensure that the air supplied meets the quality requirements in British Standard BS EN 12021:2014. This states that breathing air should not contain any contaminants at a concentration which can cause toxic or harmful effects and in any event contaminants should be as low as possible and no greater than specified within the standard. "),
                                  createVNode("p", null, " As an employer, there is a clear responsibility under the requirements of the HSE and It is a legal requirement to ensure that the quality of breathable air being supplied to an operator is at a suitable standard providing fit for purpose safety equipment for all employees that may work in an environment or carry out a process, which may be hazardous to the employee’s health. This applies to both abrasive blasting and paint spraying activities. "),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "COSHH regulations state that ‘testing should be conducted at least once every 3 months")
                                  ]),
                                  createVNode("p", null, " BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014. "),
                                  createVNode("p", null, " You should base the frequency of such tests on a risk assessment, but they should take place at least every three months, and more often when the quality of air cannot be assured to these levels. As part of the risk assessment, if a mobile compressor is being used consideration should be given as to how often the air supply should be checked when the compressor is moved. "),
                                  createVNode("p", null, " On completion of all testing a detailed report for each respiratory system will be prepared confirming whether the equipment is ‘Fit for Purpose’ and complies to the requirements stated in BS EN 12021:2014. ")
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
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-ae58cdf9${_scopeId7}>`);
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
                                createVNode("p", null, " Compressed air for air fed helmets and masks originates from a compressor system and is filtered in a multistage breathing air filter. As the air fed helmet or mask wearer’s life and health depend on the air supplied by the compressor, you should ensure that the air supplied meets the quality requirements in British Standard BS EN 12021:2014. This states that breathing air should not contain any contaminants at a concentration which can cause toxic or harmful effects and in any event contaminants should be as low as possible and no greater than specified within the standard. "),
                                createVNode("p", null, " As an employer, there is a clear responsibility under the requirements of the HSE and It is a legal requirement to ensure that the quality of breathable air being supplied to an operator is at a suitable standard providing fit for purpose safety equipment for all employees that may work in an environment or carry out a process, which may be hazardous to the employee’s health. This applies to both abrasive blasting and paint spraying activities. "),
                                createVNode("p", null, [
                                  createVNode("strong", null, "COSHH regulations state that ‘testing should be conducted at least once every 3 months")
                                ]),
                                createVNode("p", null, " BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014. "),
                                createVNode("p", null, " You should base the frequency of such tests on a risk assessment, but they should take place at least every three months, and more often when the quality of air cannot be assured to these levels. As part of the risk assessment, if a mobile compressor is being used consideration should be given as to how often the air supply should be checked when the compressor is moved. "),
                                createVNode("p", null, " On completion of all testing a detailed report for each respiratory system will be prepared confirming whether the equipment is ‘Fit for Purpose’ and complies to the requirements stated in BS EN 12021:2014. ")
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
                              createVNode("p", null, " Compressed air for air fed helmets and masks originates from a compressor system and is filtered in a multistage breathing air filter. As the air fed helmet or mask wearer’s life and health depend on the air supplied by the compressor, you should ensure that the air supplied meets the quality requirements in British Standard BS EN 12021:2014. This states that breathing air should not contain any contaminants at a concentration which can cause toxic or harmful effects and in any event contaminants should be as low as possible and no greater than specified within the standard. "),
                              createVNode("p", null, " As an employer, there is a clear responsibility under the requirements of the HSE and It is a legal requirement to ensure that the quality of breathable air being supplied to an operator is at a suitable standard providing fit for purpose safety equipment for all employees that may work in an environment or carry out a process, which may be hazardous to the employee’s health. This applies to both abrasive blasting and paint spraying activities. "),
                              createVNode("p", null, [
                                createVNode("strong", null, "COSHH regulations state that ‘testing should be conducted at least once every 3 months")
                              ]),
                              createVNode("p", null, " BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014. "),
                              createVNode("p", null, " You should base the frequency of such tests on a risk assessment, but they should take place at least every three months, and more often when the quality of air cannot be assured to these levels. As part of the risk assessment, if a mobile compressor is being used consideration should be given as to how often the air supply should be checked when the compressor is moved. "),
                              createVNode("p", null, " On completion of all testing a detailed report for each respiratory system will be prepared confirming whether the equipment is ‘Fit for Purpose’ and complies to the requirements stated in BS EN 12021:2014. ")
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
                            createVNode("p", null, " Compressed air for air fed helmets and masks originates from a compressor system and is filtered in a multistage breathing air filter. As the air fed helmet or mask wearer’s life and health depend on the air supplied by the compressor, you should ensure that the air supplied meets the quality requirements in British Standard BS EN 12021:2014. This states that breathing air should not contain any contaminants at a concentration which can cause toxic or harmful effects and in any event contaminants should be as low as possible and no greater than specified within the standard. "),
                            createVNode("p", null, " As an employer, there is a clear responsibility under the requirements of the HSE and It is a legal requirement to ensure that the quality of breathable air being supplied to an operator is at a suitable standard providing fit for purpose safety equipment for all employees that may work in an environment or carry out a process, which may be hazardous to the employee’s health. This applies to both abrasive blasting and paint spraying activities. "),
                            createVNode("p", null, [
                              createVNode("strong", null, "COSHH regulations state that ‘testing should be conducted at least once every 3 months")
                            ]),
                            createVNode("p", null, " BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014. "),
                            createVNode("p", null, " You should base the frequency of such tests on a risk assessment, but they should take place at least every three months, and more often when the quality of air cannot be assured to these levels. As part of the risk assessment, if a mobile compressor is being used consideration should be given as to how often the air supply should be checked when the compressor is moved. "),
                            createVNode("p", null, " On completion of all testing a detailed report for each respiratory system will be prepared confirming whether the equipment is ‘Fit for Purpose’ and complies to the requirements stated in BS EN 12021:2014. ")
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
                          createVNode("p", null, " Compressed air for air fed helmets and masks originates from a compressor system and is filtered in a multistage breathing air filter. As the air fed helmet or mask wearer’s life and health depend on the air supplied by the compressor, you should ensure that the air supplied meets the quality requirements in British Standard BS EN 12021:2014. This states that breathing air should not contain any contaminants at a concentration which can cause toxic or harmful effects and in any event contaminants should be as low as possible and no greater than specified within the standard. "),
                          createVNode("p", null, " As an employer, there is a clear responsibility under the requirements of the HSE and It is a legal requirement to ensure that the quality of breathable air being supplied to an operator is at a suitable standard providing fit for purpose safety equipment for all employees that may work in an environment or carry out a process, which may be hazardous to the employee’s health. This applies to both abrasive blasting and paint spraying activities. "),
                          createVNode("p", null, [
                            createVNode("strong", null, "COSHH regulations state that ‘testing should be conducted at least once every 3 months")
                          ]),
                          createVNode("p", null, " BASCC certified engineers can periodically test the air quality of your respiratory device to ensure that the control measures you have put in place are delivering the air quality required by BS EN 12021:2014. "),
                          createVNode("p", null, " You should base the frequency of such tests on a risk assessment, but they should take place at least every three months, and more often when the quality of air cannot be assured to these levels. As part of the risk assessment, if a mobile compressor is being used consideration should be given as to how often the air supply should be checked when the compressor is moved. "),
                          createVNode("p", null, " On completion of all testing a detailed report for each respiratory system will be prepared confirming whether the equipment is ‘Fit for Purpose’ and complies to the requirements stated in BS EN 12021:2014. ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/breathing-air-quality-testing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const breathingAirQualityTesting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ae58cdf9"]]);

export { breathingAirQualityTesting as default };
//# sourceMappingURL=breathing-air-quality-testing-DmN0L98X.mjs.map
