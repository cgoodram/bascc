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

const _imports_0 = publicAssetsURL("/imgs/cleanroon-validation/1.jpg");
const _imports_1 = publicAssetsURL("/imgs/cleanroon-validation/2.jpg");
const _sfc_main = {
  name: "Services",
  components: {
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
      title: this.getCurrentPageMeta.seo.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.getCurrentPageMeta.seo.description
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.getCurrentPageMeta.seo.description
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-f200d8de>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: $options.getCurrentPageMeta.label, url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-f200d8de>`);
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
                                _push6(`<p data-v-f200d8de${_scopeId5}> BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection. </p><p data-v-f200d8de${_scopeId5}> At BASCC we understand the importance of your cleanroom facility should it be in the Pharma, Biotech or Semi-Conductor industry. Our CTCB-I trained engineers with their wealth of experience working within critical environments can fully qualify your cleanroom suite/facility in line with all the current regulatory standards (ISO14644/EuGMP) </p><p data-v-f200d8de${_scopeId5}> It is essential for any cleanroom suite to be correctly tested upon initial set up (OQ/PQ stages) and then routinely qualified throughout its lifespan to ensure continual compliance giving the end user assurance that their cleanroom facility is continually complying to the current regulatory standards. </p><p data-v-f200d8de${_scopeId5}>Tests we can perform:</p><ul class="no-style chevrons" data-v-f200d8de${_scopeId5}><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`HEPA filter Installation. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Air change rate verification. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Air flow velocity verification. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`DOP filter integrity testing (DOP + DPC method) </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Non-Viable particle count verification. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Room recovery / decay rate testing. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Smoke visualisation studies including editing service. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Containment leak testing. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Temperature &amp; humidity verification. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Temperature &amp; humidity mapping. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Magnehelic gauge calibration. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Noise Level verification. </li><li data-v-f200d8de${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }, null, _parent6, _scopeId5));
                                _push6(`Light level verification. </li></ul><p data-v-f200d8de${_scopeId5}> All of the testing performed will be documented in a detailed test report upon completion of the works in line with GMP guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the test results found </p><p data-v-f200d8de${_scopeId5}> BASCC are independent from any cleanroom builder, equipment manufacturer or designer giving assurances our testing reports are completely unbiased </p>`);
                              } else {
                                return [
                                  createVNode("p", null, " BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection. "),
                                  createVNode("p", null, " At BASCC we understand the importance of your cleanroom facility should it be in the Pharma, Biotech or Semi-Conductor industry. Our CTCB-I trained engineers with their wealth of experience working within critical environments can fully qualify your cleanroom suite/facility in line with all the current regulatory standards (ISO14644/EuGMP) "),
                                  createVNode("p", null, " It is essential for any cleanroom suite to be correctly tested upon initial set up (OQ/PQ stages) and then routinely qualified throughout its lifespan to ensure continual compliance giving the end user assurance that their cleanroom facility is continually complying to the current regulatory standards. "),
                                  createVNode("p", null, "Tests we can perform:"),
                                  createVNode("ul", { class: "no-style chevrons" }, [
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("HEPA filter Installation. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Air change rate verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Air flow velocity verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("DOP filter integrity testing (DOP + DPC method) ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Non-Viable particle count verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Room recovery / decay rate testing. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Smoke visualisation studies including editing service. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Containment leak testing. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Temperature & humidity verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Temperature & humidity mapping. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Magnehelic gauge calibration. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Noise Level verification. ")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                      createTextVNode("Light level verification. ")
                                    ])
                                  ]),
                                  createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with GMP guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the test results found "),
                                  createVNode("p", null, " BASCC are independent from any cleanroom builder, equipment manufacturer or designer giving assurances our testing reports are completely unbiased ")
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
                                      _push7(ssrRenderComponent(_component_b_col, { md: "6" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-f200d8de${_scopeId7}>`);
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
                                      _push7(ssrRenderComponent(_component_b_col, { md: "6" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(`<img${ssrRenderAttr("src", _imports_1)} class="img-fluid shadow-sm" data-v-f200d8de${_scopeId7}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                src: _imports_1,
                                                class: "img-fluid shadow-sm"
                                              })
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_b_col, { md: "6" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_0,
                                              class: "img-fluid shadow-sm"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_b_col, { md: "6" }, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              src: _imports_1,
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
                                      createVNode(_component_b_col, { md: "6" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_0,
                                            class: "img-fluid shadow-sm"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_b_col, { md: "6" }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            src: _imports_1,
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
                                createVNode("p", null, " BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection. "),
                                createVNode("p", null, " At BASCC we understand the importance of your cleanroom facility should it be in the Pharma, Biotech or Semi-Conductor industry. Our CTCB-I trained engineers with their wealth of experience working within critical environments can fully qualify your cleanroom suite/facility in line with all the current regulatory standards (ISO14644/EuGMP) "),
                                createVNode("p", null, " It is essential for any cleanroom suite to be correctly tested upon initial set up (OQ/PQ stages) and then routinely qualified throughout its lifespan to ensure continual compliance giving the end user assurance that their cleanroom facility is continually complying to the current regulatory standards. "),
                                createVNode("p", null, "Tests we can perform:"),
                                createVNode("ul", { class: "no-style chevrons" }, [
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("HEPA filter Installation. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Air change rate verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Air flow velocity verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("DOP filter integrity testing (DOP + DPC method) ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Non-Viable particle count verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Room recovery / decay rate testing. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Smoke visualisation studies including editing service. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Containment leak testing. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Temperature & humidity verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Temperature & humidity mapping. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Magnehelic gauge calibration. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Noise Level verification. ")
                                  ]),
                                  createVNode("li", null, [
                                    createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                    createTextVNode("Light level verification. ")
                                  ])
                                ]),
                                createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with GMP guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the test results found "),
                                createVNode("p", null, " BASCC are independent from any cleanroom builder, equipment manufacturer or designer giving assurances our testing reports are completely unbiased ")
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
                                    createVNode(_component_b_col, { md: "6" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_0,
                                          class: "img-fluid shadow-sm"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_b_col, { md: "6" }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          src: _imports_1,
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
                              createVNode("p", null, " BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection. "),
                              createVNode("p", null, " At BASCC we understand the importance of your cleanroom facility should it be in the Pharma, Biotech or Semi-Conductor industry. Our CTCB-I trained engineers with their wealth of experience working within critical environments can fully qualify your cleanroom suite/facility in line with all the current regulatory standards (ISO14644/EuGMP) "),
                              createVNode("p", null, " It is essential for any cleanroom suite to be correctly tested upon initial set up (OQ/PQ stages) and then routinely qualified throughout its lifespan to ensure continual compliance giving the end user assurance that their cleanroom facility is continually complying to the current regulatory standards. "),
                              createVNode("p", null, "Tests we can perform:"),
                              createVNode("ul", { class: "no-style chevrons" }, [
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("HEPA filter Installation. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Air change rate verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Air flow velocity verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("DOP filter integrity testing (DOP + DPC method) ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Non-Viable particle count verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Room recovery / decay rate testing. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Smoke visualisation studies including editing service. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Containment leak testing. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Temperature & humidity verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Temperature & humidity mapping. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Magnehelic gauge calibration. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Noise Level verification. ")
                                ]),
                                createVNode("li", null, [
                                  createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                  createTextVNode("Light level verification. ")
                                ])
                              ]),
                              createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with GMP guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the test results found "),
                              createVNode("p", null, " BASCC are independent from any cleanroom builder, equipment manufacturer or designer giving assurances our testing reports are completely unbiased ")
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
                                  createVNode(_component_b_col, { md: "6" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_0,
                                        class: "img-fluid shadow-sm"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_b_col, { md: "6" }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        src: _imports_1,
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
                            createVNode("p", null, " BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection. "),
                            createVNode("p", null, " At BASCC we understand the importance of your cleanroom facility should it be in the Pharma, Biotech or Semi-Conductor industry. Our CTCB-I trained engineers with their wealth of experience working within critical environments can fully qualify your cleanroom suite/facility in line with all the current regulatory standards (ISO14644/EuGMP) "),
                            createVNode("p", null, " It is essential for any cleanroom suite to be correctly tested upon initial set up (OQ/PQ stages) and then routinely qualified throughout its lifespan to ensure continual compliance giving the end user assurance that their cleanroom facility is continually complying to the current regulatory standards. "),
                            createVNode("p", null, "Tests we can perform:"),
                            createVNode("ul", { class: "no-style chevrons" }, [
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("HEPA filter Installation. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Air change rate verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Air flow velocity verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("DOP filter integrity testing (DOP + DPC method) ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Non-Viable particle count verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Room recovery / decay rate testing. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Smoke visualisation studies including editing service. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Containment leak testing. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Temperature & humidity verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Temperature & humidity mapping. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Magnehelic gauge calibration. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Noise Level verification. ")
                              ]),
                              createVNode("li", null, [
                                createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                                createTextVNode("Light level verification. ")
                              ])
                            ]),
                            createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with GMP guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the test results found "),
                            createVNode("p", null, " BASCC are independent from any cleanroom builder, equipment manufacturer or designer giving assurances our testing reports are completely unbiased ")
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
                                createVNode(_component_b_col, { md: "6" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_0,
                                      class: "img-fluid shadow-sm"
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_b_col, { md: "6" }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      src: _imports_1,
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
                          createVNode("p", null, " BASCC specialise in the testing, validation and certification of cleanrooms to ensure this element of the pharmaceutical process conforms with any MHRA or FDA inspection. "),
                          createVNode("p", null, " At BASCC we understand the importance of your cleanroom facility should it be in the Pharma, Biotech or Semi-Conductor industry. Our CTCB-I trained engineers with their wealth of experience working within critical environments can fully qualify your cleanroom suite/facility in line with all the current regulatory standards (ISO14644/EuGMP) "),
                          createVNode("p", null, " It is essential for any cleanroom suite to be correctly tested upon initial set up (OQ/PQ stages) and then routinely qualified throughout its lifespan to ensure continual compliance giving the end user assurance that their cleanroom facility is continually complying to the current regulatory standards. "),
                          createVNode("p", null, "Tests we can perform:"),
                          createVNode("ul", { class: "no-style chevrons" }, [
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("HEPA filter Installation. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Air change rate verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Air flow velocity verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("DOP filter integrity testing (DOP + DPC method) ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Non-Viable particle count verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Room recovery / decay rate testing. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Smoke visualisation studies including editing service. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Containment leak testing. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Temperature & humidity verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Temperature & humidity mapping. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Magnehelic gauge calibration. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Noise Level verification. ")
                            ]),
                            createVNode("li", null, [
                              createVNode(_component_font_awesome_icon, { icon: ["fas", "chevron-right"] }),
                              createTextVNode("Light level verification. ")
                            ])
                          ]),
                          createVNode("p", null, " All of the testing performed will be documented in a detailed test report upon completion of the works in line with GMP guidelines. BASCC only use state of the art testing equipment thus ensuring our clients receive the best possible service giving them confidence in the test results found "),
                          createVNode("p", null, " BASCC are independent from any cleanroom builder, equipment manufacturer or designer giving assurances our testing reports are completely unbiased ")
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
                              createVNode(_component_b_col, { md: "6" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_0,
                                    class: "img-fluid shadow-sm"
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_b_col, { md: "6" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: _imports_1,
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
  _push(ssrRenderComponent(_component_cta, { "cta-text": "Get in touch today" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cleanroom-validation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cleanroomValidation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f200d8de"]]);

export { cleanroomValidation as default };
//# sourceMappingURL=cleanroom-validation-CgQ8b09P.mjs.map
