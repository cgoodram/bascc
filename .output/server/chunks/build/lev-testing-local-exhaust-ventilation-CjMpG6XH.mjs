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

const _imports_0 = publicAssetsURL("/imgs/lev-testing/1.jpg");
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-wrapper" }, _attrs))} data-v-b912209f>`);
  _push(ssrRenderComponent(_component_pageHeader, {
    title: $options.getCurrentPageMeta.label,
    breadcrumb: [
      { label: "Services", url: "/services" },
      { label: $options.getCurrentPageMeta.label, url: null }
    ]
  }, null, _parent));
  _push(`<div class="page-content" data-v-b912209f>`);
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
                                _push6(`<p data-v-b912209f${_scopeId5}> Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations. The measurements taken are compared with the criteria for performance for ventilation systems given in HSG258 <em data-v-b912209f${_scopeId5}>“Controlling airborne contaminants at work: A guide to LEV local exhaust ventilation”</em>. </p><p data-v-b912209f${_scopeId5}><strong data-v-b912209f${_scopeId5}>As stated in HSG258 competence is a legal requirement and must only be serviced by qualified engineers</strong></p><p data-v-b912209f${_scopeId5}> There are many different processes across a variety of industries which create dust, mist, fumes, vapours and other contaminants. Human exposure to these harmful airborne contaminants is controlled using Local Exhaust Ventilation (LEV) systems. This is why it is essential to continually test your LEV system annually. </p><p data-v-b912209f${_scopeId5}> Our specialist engineers can perform the following checks as per the current regulatory standards: </p><ol class="chevrons" data-v-b912209f${_scopeId5}><li data-v-b912209f${_scopeId5}> Thorough visual and structural examination, checking for damage, wear and tear, </li><li data-v-b912209f${_scopeId5}> Review of technical performance, including an assessment of capture zone, measuring face velocities and fan checks, </li><li data-v-b912209f${_scopeId5}> Assessment of control effectiveness to ensure the system is adequately controlling the contaminants from the process. </li></ol><p data-v-b912209f${_scopeId5}> On completion of all testing a detailed test report for each LEV system will be prepared confirming whether the LEV is ‘Fit for Purpose’ or if remedial works are required. </p>`);
                              } else {
                                return [
                                  createVNode("p", null, [
                                    createTextVNode(" Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations. The measurements taken are compared with the criteria for performance for ventilation systems given in HSG258 "),
                                    createVNode("em", null, "“Controlling airborne contaminants at work: A guide to LEV local exhaust ventilation”"),
                                    createTextVNode(". ")
                                  ]),
                                  createVNode("p", null, [
                                    createVNode("strong", null, "As stated in HSG258 competence is a legal requirement and must only be serviced by qualified engineers")
                                  ]),
                                  createVNode("p", null, " There are many different processes across a variety of industries which create dust, mist, fumes, vapours and other contaminants. Human exposure to these harmful airborne contaminants is controlled using Local Exhaust Ventilation (LEV) systems. This is why it is essential to continually test your LEV system annually. "),
                                  createVNode("p", null, " Our specialist engineers can perform the following checks as per the current regulatory standards: "),
                                  createVNode("ol", { class: "chevrons" }, [
                                    createVNode("li", null, " Thorough visual and structural examination, checking for damage, wear and tear, "),
                                    createVNode("li", null, " Review of technical performance, including an assessment of capture zone, measuring face velocities and fan checks, "),
                                    createVNode("li", null, " Assessment of control effectiveness to ensure the system is adequately controlling the contaminants from the process. ")
                                  ]),
                                  createVNode("p", null, " On completion of all testing a detailed test report for each LEV system will be prepared confirming whether the LEV is ‘Fit for Purpose’ or if remedial works are required. ")
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
                                            _push8(`<img${ssrRenderAttr("src", _imports_0)} class="img-fluid shadow-sm" data-v-b912209f${_scopeId7}>`);
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
                                createVNode("p", null, [
                                  createTextVNode(" Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations. The measurements taken are compared with the criteria for performance for ventilation systems given in HSG258 "),
                                  createVNode("em", null, "“Controlling airborne contaminants at work: A guide to LEV local exhaust ventilation”"),
                                  createTextVNode(". ")
                                ]),
                                createVNode("p", null, [
                                  createVNode("strong", null, "As stated in HSG258 competence is a legal requirement and must only be serviced by qualified engineers")
                                ]),
                                createVNode("p", null, " There are many different processes across a variety of industries which create dust, mist, fumes, vapours and other contaminants. Human exposure to these harmful airborne contaminants is controlled using Local Exhaust Ventilation (LEV) systems. This is why it is essential to continually test your LEV system annually. "),
                                createVNode("p", null, " Our specialist engineers can perform the following checks as per the current regulatory standards: "),
                                createVNode("ol", { class: "chevrons" }, [
                                  createVNode("li", null, " Thorough visual and structural examination, checking for damage, wear and tear, "),
                                  createVNode("li", null, " Review of technical performance, including an assessment of capture zone, measuring face velocities and fan checks, "),
                                  createVNode("li", null, " Assessment of control effectiveness to ensure the system is adequately controlling the contaminants from the process. ")
                                ]),
                                createVNode("p", null, " On completion of all testing a detailed test report for each LEV system will be prepared confirming whether the LEV is ‘Fit for Purpose’ or if remedial works are required. ")
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
                              createVNode("p", null, [
                                createTextVNode(" Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations. The measurements taken are compared with the criteria for performance for ventilation systems given in HSG258 "),
                                createVNode("em", null, "“Controlling airborne contaminants at work: A guide to LEV local exhaust ventilation”"),
                                createTextVNode(". ")
                              ]),
                              createVNode("p", null, [
                                createVNode("strong", null, "As stated in HSG258 competence is a legal requirement and must only be serviced by qualified engineers")
                              ]),
                              createVNode("p", null, " There are many different processes across a variety of industries which create dust, mist, fumes, vapours and other contaminants. Human exposure to these harmful airborne contaminants is controlled using Local Exhaust Ventilation (LEV) systems. This is why it is essential to continually test your LEV system annually. "),
                              createVNode("p", null, " Our specialist engineers can perform the following checks as per the current regulatory standards: "),
                              createVNode("ol", { class: "chevrons" }, [
                                createVNode("li", null, " Thorough visual and structural examination, checking for damage, wear and tear, "),
                                createVNode("li", null, " Review of technical performance, including an assessment of capture zone, measuring face velocities and fan checks, "),
                                createVNode("li", null, " Assessment of control effectiveness to ensure the system is adequately controlling the contaminants from the process. ")
                              ]),
                              createVNode("p", null, " On completion of all testing a detailed test report for each LEV system will be prepared confirming whether the LEV is ‘Fit for Purpose’ or if remedial works are required. ")
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
                            createVNode("p", null, [
                              createTextVNode(" Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations. The measurements taken are compared with the criteria for performance for ventilation systems given in HSG258 "),
                              createVNode("em", null, "“Controlling airborne contaminants at work: A guide to LEV local exhaust ventilation”"),
                              createTextVNode(". ")
                            ]),
                            createVNode("p", null, [
                              createVNode("strong", null, "As stated in HSG258 competence is a legal requirement and must only be serviced by qualified engineers")
                            ]),
                            createVNode("p", null, " There are many different processes across a variety of industries which create dust, mist, fumes, vapours and other contaminants. Human exposure to these harmful airborne contaminants is controlled using Local Exhaust Ventilation (LEV) systems. This is why it is essential to continually test your LEV system annually. "),
                            createVNode("p", null, " Our specialist engineers can perform the following checks as per the current regulatory standards: "),
                            createVNode("ol", { class: "chevrons" }, [
                              createVNode("li", null, " Thorough visual and structural examination, checking for damage, wear and tear, "),
                              createVNode("li", null, " Review of technical performance, including an assessment of capture zone, measuring face velocities and fan checks, "),
                              createVNode("li", null, " Assessment of control effectiveness to ensure the system is adequately controlling the contaminants from the process. ")
                            ]),
                            createVNode("p", null, " On completion of all testing a detailed test report for each LEV system will be prepared confirming whether the LEV is ‘Fit for Purpose’ or if remedial works are required. ")
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
                          createVNode("p", null, [
                            createTextVNode(" Our BOHS P601 certified testing engineers can perform a thorough examination and test your critical LEV system in line with the HSE requirements of Regulation 9 of the Control of Substances Hazardous to Health (COSHH) regulations. The measurements taken are compared with the criteria for performance for ventilation systems given in HSG258 "),
                            createVNode("em", null, "“Controlling airborne contaminants at work: A guide to LEV local exhaust ventilation”"),
                            createTextVNode(". ")
                          ]),
                          createVNode("p", null, [
                            createVNode("strong", null, "As stated in HSG258 competence is a legal requirement and must only be serviced by qualified engineers")
                          ]),
                          createVNode("p", null, " There are many different processes across a variety of industries which create dust, mist, fumes, vapours and other contaminants. Human exposure to these harmful airborne contaminants is controlled using Local Exhaust Ventilation (LEV) systems. This is why it is essential to continually test your LEV system annually. "),
                          createVNode("p", null, " Our specialist engineers can perform the following checks as per the current regulatory standards: "),
                          createVNode("ol", { class: "chevrons" }, [
                            createVNode("li", null, " Thorough visual and structural examination, checking for damage, wear and tear, "),
                            createVNode("li", null, " Review of technical performance, including an assessment of capture zone, measuring face velocities and fan checks, "),
                            createVNode("li", null, " Assessment of control effectiveness to ensure the system is adequately controlling the contaminants from the process. ")
                          ]),
                          createVNode("p", null, " On completion of all testing a detailed test report for each LEV system will be prepared confirming whether the LEV is ‘Fit for Purpose’ or if remedial works are required. ")
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
  _push(ssrRenderComponent(_component_cta, { "cta-text": "Request an LEV testing quote" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lev-testing-local-exhaust-ventilation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const levTestingLocalExhaustVentilation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b912209f"]]);

export { levTestingLocalExhaustVentilation as default };
//# sourceMappingURL=lev-testing-local-exhaust-ventilation-CjMpG6XH.mjs.map
