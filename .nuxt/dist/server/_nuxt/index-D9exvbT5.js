import { _ as __nuxt_component_0 } from "./nuxt-link-BSFgMzag.js";
import { u as useFetch } from "./fetch-DXIPJ5Pn.js";
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "ohash";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => useFetch(`https://fakestoreapi.com/products`, "$U48yGv7YOO")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid" }, _attrs))}><div class="space-y-[20px] container-full"><h5 class="text-20px text-center font-bold uppercase">Popular Products</h5><div class="grid grid-cols-4 gap-[10px]"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/products/${product.id}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-[10px]"${_scopeId}><div class="flex justify-center items-center"${_scopeId}><img${ssrRenderAttr("src", product.image)} alt="images" class="w-[250px] h-[250px]"${_scopeId}></div><p class="text-14px text-center"${_scopeId}>${ssrInterpolate(product.title)}</p><p class="text-14px text-center"${_scopeId}>$${ssrInterpolate(product.price)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-[10px]" }, [
                  createVNode("div", { class: "flex justify-center items-center" }, [
                    createVNode("img", {
                      src: product.image,
                      alt: "images",
                      class: "w-[250px] h-[250px]"
                    }, null, 8, ["src"])
                  ]),
                  createVNode("p", { class: "text-14px text-center" }, toDisplayString(product.title), 1),
                  createVNode("p", { class: "text-14px text-center" }, "$" + toDisplayString(product.price), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-center"${_scopeId}>See More</p>`);
          } else {
            return [
              createVNode("p", { class: "text-center" }, "See More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D9exvbT5.js.map
