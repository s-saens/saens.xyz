window.__sveltekit_data = (function(a,b,c){return {type:c,nodes:[a,a,{type:c,data:{post:{slug:"002",title:"반응형 데이터 쉽게 다루기",date:"2022-12-16T00:00:00.000Z",excerpt:"How to handle datas easily with Data\u003CT\u003E class",tags:["Unity","C#","ScriptableObject"],html:"\u003Cp\u003E게임에서 사용되는 수많은 값들이 빈번하게 변경됩니다. 그리고 이들을 화면에 표시할 때 Update 함수에서 변수를 계속 그리는 것은 매우 비효율적이라는 것은 아마 다들 아실 것입니다.\u003Cbr\u003E\nAction 타입의 필드를 이용하여 값의 변경을 쉽고 안전하게 처리할 수 있는 클래스를 만들어 봅시다.\u003C\u002Fp\u003E\n\u003Ch2 id=\"datalttgt\"\u003E\u003Ccode\u003EData&lt;T&gt;\u003C\u002Fcode\u003E\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#datalttgt\"\u003E\u003Cspan class=\"heading-link\"\u003E#\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Cdiv class=\"code-block svelte-19bsk6e\"\u003E\u003Cdiv class=\"filename svelte-19bsk6e\"\u003EData.cs\u003C\u002Fdiv\u003E\n\t\u003Cdiv class=\"lang svelte-19bsk6e\"\u003EC#\u003C\u002Fdiv\u003E\n\t\u003Cpre class=\"language-csharp\"\u003E\u003C!-- HTML_TAG_START --\u003E\u003Ccode class=\"language-csharp\"\u003E\u003Cspan class=\"token keyword\"\u003Eusing\u003C\u002Fspan\u003E \u003Cspan class=\"token namespace\"\u003ESystem\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EData\u003Cspan class=\"token punctuation\"\u003E&lt;\u003C\u002Fspan\u003ET\u003Cspan class=\"token punctuation\"\u003E\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003ET\u003C\u002Fspan\u003E v\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EAction\u003Cspan class=\"token punctuation\"\u003E&lt;\u003C\u002Fspan\u003ET\u003Cspan class=\"token punctuation\"\u003E\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E onChange\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Ebool\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E blockChangeEvent \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token boolean\"\u003Efalse\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evirtual\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003ET\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"token keyword\"\u003Eget\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n            \u003Cspan class=\"token keyword\"\u003Ereturn\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Ethis\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Ev\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"token keyword\"\u003Eset\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n            \u003Cspan class=\"token keyword\"\u003Ethis\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Ev \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n            \u003Cspan class=\"token keyword\"\u003Eif\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token operator\"\u003E!\u003C\u002Fspan\u003EblockChangeEvent\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Ethis\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003EonChange\u003Cspan class=\"token punctuation\"\u003E?.\u003C\u002Fspan\u003E\u003Cspan class=\"token function\"\u003EInvoke\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EData\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EData\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token class-name\"\u003ET\u003C\u002Fspan\u003E val\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        \u003Cspan class=\"token keyword\"\u003Ethis\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Ev \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E val\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C!-- HTML_TAG_END --\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Ch2 id=\"example\"\u003EExample\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#example\"\u003E\u003Cspan class=\"heading-link\"\u003E#\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Cp\u003E코드가 어렵지 않으니 바로 예제를 살펴봅시다.  \u003C\u002Fp\u003E\n\u003Cp\u003E먼저 어디서든 접근 가능한, 데이터(\u003Ccode\u003EData&lt;T&gt;\u003C\u002Fcode\u003E)만을 담고 있는 Model 클래스를 만들어 줍시다. 이 때 Scriptable Object를 이용하면 좋습니다.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block svelte-19bsk6e\"\u003E\u003Cdiv class=\"filename svelte-19bsk6e\"\u003EModel.cs\u003C\u002Fdiv\u003E\n\t\u003Cdiv class=\"lang svelte-19bsk6e\"\u003EC#\u003C\u002Fdiv\u003E\n\t\u003Cpre class=\"language-csharp\"\u003E\u003C!-- HTML_TAG_START --\u003E\u003Ccode class=\"language-csharp\"\u003E\u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EModel\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"token type-list\"\u003E\u003Cspan class=\"token class-name\"\u003EScriptableObject\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EData\u003Cspan class=\"token punctuation\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Eint\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E age \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"token constructor-invocation class-name\"\u003EData\u003Cspan class=\"token punctuation\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Eint\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token number\"\u003E24\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EData\u003Cspan class=\"token punctuation\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E name \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"token constructor-invocation class-name\"\u003EData\u003Cspan class=\"token punctuation\"\u003E&lt;\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Estring\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token string\"\u003E\"상훈\"\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C!-- HTML_TAG_END --\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp\u003E그리고 View에서는, 데이터가 변경될 때 실행되어야 하는 Change~ 함수를 Model 클래스에 있는 \u003Ccode\u003EData&lt;T&gt;\u003C\u002Fcode\u003E의 onChange에 등록해줍니다.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block svelte-19bsk6e\"\u003E\u003Cdiv class=\"filename svelte-19bsk6e\"\u003EView.cs\u003C\u002Fdiv\u003E\n\t\u003Cdiv class=\"lang svelte-19bsk6e\"\u003EC#\u003C\u002Fdiv\u003E\n\t\u003Cpre class=\"language-csharp\"\u003E\u003C!-- HTML_TAG_START --\u003E\u003Ccode class=\"language-csharp\"\u003E\u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EView\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"token type-list\"\u003E\u003Cspan class=\"token class-name\"\u003EMonoBehaviour\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"token attribute\"\u003E\u003Cspan class=\"token class-name\"\u003ESerializeField\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EModel\u003C\u002Fspan\u003E model\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"token attribute\"\u003E\u003Cspan class=\"token class-name\"\u003ESerializeField\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EText\u003C\u002Fspan\u003E textAge\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"token attribute\"\u003E\u003Cspan class=\"token class-name\"\u003ESerializeField\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EText\u003C\u002Fspan\u003E textName\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \n    \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token return-type class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Evoid\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EOnEnable\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        model\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Eage\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003EonChange \u003Cspan class=\"token operator\"\u003E+=\u003C\u002Fspan\u003E ChangeAge\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n        model\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Ename\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003EonChange \u003Cspan class=\"token operator\"\u003E+=\u003C\u002Fspan\u003E ChangeName\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n    \n    \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token return-type class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Evoid\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EOnDisable\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        model\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Eage\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003EonChange \u003Cspan class=\"token operator\"\u003E-=\u003C\u002Fspan\u003E ChangeAge\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n        model\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Ename\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003EonChange \u003Cspan class=\"token operator\"\u003E-=\u003C\u002Fspan\u003E ChangeName\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n    \n    \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token return-type class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Evoid\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EChangeAge\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Eint\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        textAge\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Etext \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n    \n    \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token return-type class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Evoid\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EChangeName\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Estring\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        textName\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Etext \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C!-- HTML_TAG_END --\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Cp\u003E이제 어떤 임의의, Controller 역할을 하게 될 클래스에서는 다음과 같이 View에 접근할 필요도 없이 Model의 데이터만 수정하면서 View를 변경시킬 수 있게 됩니다.\u003C\u002Fp\u003E\n\u003Cdiv class=\"code-block svelte-19bsk6e\"\u003E\u003Cdiv class=\"filename svelte-19bsk6e\"\u003EController.cs\u003C\u002Fdiv\u003E\n\t\u003Cdiv class=\"lang svelte-19bsk6e\"\u003EC#\u003C\u002Fdiv\u003E\n\t\u003Cpre class=\"language-csharp\"\u003E\u003C!-- HTML_TAG_START --\u003E\u003Ccode class=\"language-csharp\"\u003E\u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eclass\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EController\u003C\u002Fspan\u003E \u003Cspan class=\"token punctuation\"\u003E:\u003C\u002Fspan\u003E \u003Cspan class=\"token type-list\"\u003E\u003Cspan class=\"token class-name\"\u003EMonoBehaviour\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E[\u003C\u002Fspan\u003E\u003Cspan class=\"token attribute\"\u003E\u003Cspan class=\"token class-name\"\u003ESerializeField\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E]\u003C\u002Fspan\u003E \u003Cspan class=\"token keyword\"\u003Eprivate\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003EModel\u003C\u002Fspan\u003E model\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \n    \u003Cspan class=\"token keyword\"\u003Epublic\u003C\u002Fspan\u003E \u003Cspan class=\"token return-type class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Evoid\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E \u003Cspan class=\"token function\"\u003EChangePerson\u003C\u002Fspan\u003E\u003Cspan class=\"token punctuation\"\u003E(\u003C\u002Fspan\u003E\u003Cspan class=\"token class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Eint\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E age\u003Cspan class=\"token punctuation\"\u003E,\u003C\u002Fspan\u003E \u003Cspan class=\"token class-name\"\u003E\u003Cspan class=\"token keyword\"\u003Estring\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E name\u003Cspan class=\"token punctuation\"\u003E)\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#123;\u003C\u002Fspan\u003E\n        model\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Eage\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E age\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n        model\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003Ename\u003Cspan class=\"token punctuation\"\u003E.\u003C\u002Fspan\u003E\u003Cspan class=\"token keyword\"\u003Evalue\u003C\u002Fspan\u003E \u003Cspan class=\"token operator\"\u003E=\u003C\u002Fspan\u003E name\u003Cspan class=\"token punctuation\"\u003E;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\n\u003Cspan class=\"token punctuation\"\u003E&#125;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C!-- HTML_TAG_END --\u003E\u003C\u002Fpre\u003E\n\u003C\u002Fdiv\u003E\n\u003Ch2 id=\"dependency\"\u003EDependency\u003Ca aria-hidden=\"true\" tabindex=\"-1\" href=\"#dependency\"\u003E\u003Cspan class=\"heading-link\"\u003E#\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fh2\u003E\n\u003Cp\u003E\u003Ccode\u003EData&lt;T&gt;\u003C\u002Fcode\u003E클래스를 사용하면 아래 그림과 같은 바람직한 의존성을 유지한 채로 코드를 작성할 수 있습니다.\u003C\u002Fp\u003E\n\u003Cpicture class=\"svelte-et962n\"\u003E\n\t\u003Cimg src=\"\u002Foptimized-images\u002Fposts\u002F002\u002Fdependency.png\" alt=\"Cover Image\" loading=\"lazy\" decoding=\"async\" style=\"\" class=\"svelte-et962n\"\u003E\n\t\n\u003C\u002Fpicture\u003E\n\u003Cp\u003E개발을 진행하다 보면 이게 얼마나 편한지, 왜 결합도가 낮을 수록 좋은 건지 쉽게 와닿을 것입니다.\u003C\u002Fp\u003E",css:{code:".code-block.svelte-19bsk6e.svelte-19bsk6e{user-select:all;display:block;position:relative;background-color:var(--code-background-color);color:var(--code-text-color);font-family:var(--mono-font);font-size:1rem;line-height:1.33em;border-radius:8px;box-shadow:var(--card-shadow);padding:25px 30px;margin:30px 0}.code-block.svelte-19bsk6e pre{overflow-x:auto;scrollbar-color:var(--primary-color) var(--scrollbar-track-color);scrollbar-width:auto;padding-bottom:5px}.code-block.svelte-19bsk6e pre::-webkit-scrollbar{height:10px;padding:0}.code-block.svelte-19bsk6e pre::-webkit-scrollbar-thumb{background:var(--primary-color)}.code-block.svelte-19bsk6e pre::-webkit-scrollbar-thumb:hover{background:var(--primary-light-color)}.code-block.svelte-19bsk6e .lang.svelte-19bsk6e{position:absolute;right:0;top:-20px;background:inherit;border-radius:8px;padding:5px 10px;z-index:2;font-size:0.85em}.code-block.svelte-19bsk6e .filename.svelte-19bsk6e{background:inherit;border-top-left-radius:8px;border-top-right-radius:8px;margin-bottom:-2px;padding:7px 15px;border-radius:8px;position:absolute;left:0;top:-20px;z-index:1;font-size:0.9rem}\npicture.svelte-et962n.svelte-et962n{position:relative;width:100%;height:100%}picture.svelte-et962n img.svelte-et962n{border-radius:10px;width:100%;height:100%}",map:a},head:"",readingTime:"6 min read",relatedPosts:[]}},uses:{dependencies:b,params:["slug"],parent:b,url:b}},a]}}(null,void 0,"data"))