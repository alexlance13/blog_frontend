(this.webpackJsonpblog_frontend=this.webpackJsonpblog_frontend||[]).push([[0],{149:function(e,t,n){e.exports={navBar:"NavBar_navBar__36P4w"}},150:function(e,t,n){e.exports={editorClassName:"Editor_editorClassName__3DS5i","rdw-image-modal":"Editor_rdw-image-modal__6Upd_"}},151:function(e,t,n){e.exports={main:"PostPrev_main__1cGXT",textWrapper:"PostPrev_textWrapper__2D_1c"}},255:function(e,t,n){e.exports={main:"CommentForm_main__1JUni","shadow-textarea":"CommentForm_shadow-textarea__383J3","form-control":"CommentForm_form-control__Um0CK"}},262:function(e,t,n){e.exports={main:"Loader_main__gFDWN"}},263:function(e,t,n){e.exports={noPost:"Posts_noPost__2-UrU"}},264:function(e,t,n){e.exports={auth:"Authorization_auth__UYznG",buttons:"Authorization_buttons__2bA4G","alert-danger":"Authorization_alert-danger__1S7d8"}},267:function(e,t,n){e.exports={main:"Toggle_main__2zxx1"}},272:function(e,t,n){e.exports=n(585)},276:function(e,t,n){},277:function(e,t,n){},393:function(e,t,n){},430:function(e,t){},47:function(e,t,n){e.exports={postedBy:"PostInfo_postedBy__MwY5d",main:"PostInfo_main__3aZXP",like:"PostInfo_like__iu0IY",comment:"PostInfo_comment__OtLV9",picLink:"PostInfo_picLink__3uS9M",buttons:"PostInfo_buttons__1NVcs"}},58:function(e,t,n){e.exports={postBody:"SinglePost_postBody__3cVcm",buttons:"SinglePost_buttons__m3DAc",editing:"SinglePost_editing__3X0B2",wrap:"SinglePost_wrap__1JQuz",errors:"SinglePost_errors__3g1NU"}},585:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(27),o=n.n(s),i=(n(276),n(277),n(46)),c=n(2),u=n.n(c),l=n(14),m=n(15),p=n(12),d=n(9),f=n(10),h=n(11),v=n(58),b=n.n(v),g=n(69),E=n.n(g),_=n(7),k=n(251),O=n(106);function C(e){var t=e.comments,n=e.adminPanel,a=e.userId,s=e.isAdmin,o=e.approveCommentHandler,i=e.removeCommentHandler;return r.a.createElement("div",{className:E.a.main},t.map((function(e,t){return(!n&&e.approved||n&&!e.approved)&&r.a.createElement("div",{key:t,className:E.a.comment},r.a.createElement(_.b,{to:"/users/".concat(e.owner._id)},e.owner.login," :"),r.a.createElement("span",null,e.text),(e.owner._id===a||n||s)&&r.a.createElement("div",{className:E.a.buttons},!e.approved&&r.a.createElement("button",{className:E.a.remove,onClick:function(){return o(e._id)}},r.a.createElement(O.a,null)),r.a.createElement("button",{className:E.a.remove,onClick:function(){return i(e._id)}},r.a.createElement(k.a,null))))})))}var y=n(31),w=n.n(y),x=n(252),P=n.n(x);n(299).config();var j=P.a.create({baseURL:"https://tranquil-scrubland-33017.herokuapp.com"});j.interceptors.request.use((function(e){var t=localStorage.getItem("userInfo");return(t=JSON.parse(t)).token?(e.headers={Authorization:"Bearer "+t.token},e):e}));var S=j;function H(e,t){var n="";if(e.response&&400===e.response.status){switch(e.response.data){case"Validation error":n="You must stick with validation rules";break;case"Invalid token":n="Your token is invalid";break;default:n="Something went wrong"}w.a.fire({icon:"error",title:t,text:n,showConfirmButton:!0,timer:6e3})}else console.error(e)}var I="FETCH_POSTS_START",N="FETCH_POSTS_SUCCESS",F="FETCH_SINGLE_POST_START",T="FETCH_SINGLE_POST_SUCCESS",A="FETCH_SINGLE_POST_ERROR",L="SET_USER_INFO",R="ADD_COMMENT",B="REMOVE_COMMENT_ACTION",M="ADD_LIKE",U="REMOVE_LIKE",D="LOG_OUT",z="UPDATE_POST",Y="GET_USER",J="SET_USER",V="GET_COMMENTS",G="REMOVE_COMMENT",X="APPROVE_COMMENT";function W(e){return function(t){var n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(S.get("/posts/".concat(e)));case 3:n=a.sent,t((r=n.data,{type:T,singlePost:r})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),H(a.t0,"Fetch single post error");case 10:case"end":return a.stop()}var r}),null,null,[[0,7]])}}function q(){return function(e){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:I}),n.prev=1,n.next=4,u.a.awrap(S.get("/posts"));case 4:t=n.sent,e((a=t.data,{type:N,posts:a})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),H(n.t0,"Fetch posts error");case 11:case"end":return n.stop()}var a}),null,null,[[1,8]])}}function K(e){return{type:M,like:e}}function Z(e,t){return function(n){var a,r;return u.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a={postId:e},s.next=4,u.a.awrap(S.post("/like",a));case 4:r=s.sent,n(t?(o=r.data,{type:U,like:o}):K(r.data)),s.next=12;break;case 8:return s.prev=8,s.t0=s.catch(0),H(s.t0,"You have to login first"),s.abrupt("return",s.t0);case 12:case"end":return s.stop()}var o}),null,null,[[0,8]])}}function Q(e,t,n){var a,r;return u.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,a={title:e,subtitle:t,text:n},s.next=4,u.a.awrap(S.post("/posts/",a));case 4:return r=s.sent,w.a.fire({icon:"success",title:"Your post is on check by admin",showConfirmButton:!1,timer:2e3}),s.abrupt("return",r);case 9:s.prev=9,s.t0=s.catch(0),H(s.t0,"Creating post error");case 12:case"end":return s.stop()}}),null,null,[[0,9]])}function $(e){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,(t=new FormData).append("pics",e),n.next=5,u.a.awrap(S.post("/upload",t));case 5:return n.abrupt("return",n.sent);case 8:n.prev=8,n.t0=n.catch(0),H(n.t0,"Image uploading error");case 11:case"end":return n.stop()}}),null,null,[[0,8]])}function ee(e){return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(S.delete("/posts/".concat(e)));case 3:t(q()),w.a.fire({icon:"success",title:"This post is successfully removed",showConfirmButton:!1,timer:2e3}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),H(n.t0,"Post remove error");case 10:case"end":return n.stop()}}),null,null,[[0,7]])}}function te(e){return{type:G,id:e}}function ne(e){return{type:X,id:e}}var ae=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).removeCommentFromSinglePostHandler=function(e){n.props.removeCommentFromSinglePostHandler(e)},n.removeCommentFromAdminHandler=function(e){n.props.removeCommentFromAdminHandler(e)},n.approveCommentHandler=function(e){n.props.approveComment(e)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.adminPanel&&this.props.getComments()}},{key:"render",value:function(){return r.a.createElement(C,{removeCommentHandler:this.props.adminPanel?this.removeCommentFromAdminHandler:this.removeCommentFromSinglePostHandler,comments:this.props.adminPanel?this.props.comments:this.props.singlePost.comments,userId:this.props.userId,isAdmin:this.props.user.isAdmin,adminPanel:this.props.adminPanel})}}]),t}(a.Component);var re=Object(h.b)((function(e){return{singlePost:e.posts.singlePost,userId:e.auth.userId,user:e.auth.user,comments:e.comments.comments}}),(function(e){return{removeCommentFromSinglePostHandler:function(t){return e(function(e){return function(t){var n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(S.delete("/comment/".concat(e)));case 3:n=a.sent,t((r=n.data,{type:B,comment:r})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),H(a.t0,"Remove comment error");case 10:case"end":return a.stop()}var r}),null,null,[[0,7]])}}(t))},removeCommentFromAdminHandler:function(t){return e(function(e){return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(S.delete("/comment/".concat(e)));case 3:t(te(e)),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error("Remove comment error",n.t0);case 9:case"end":return n.stop()}}),null,null,[[0,6]])}}(t))},approveComment:function(t){return e(function(e){return function(t){return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(S.put("/comment/".concat(e),{}));case 3:t(ne(e)),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error("Approve comment error",n.t0);case 9:case"end":return n.stop()}}),null,null,[[0,6]])}}(t))},getComments:function(){return e((function(e){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.a.awrap(S.get("/comments"));case 3:t=n.sent,e((a=t.data,{type:V,comments:a})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("get all comments error: ",n.t0);case 10:case"end":return n.stop()}var a}),null,null,[[0,7]])}))}}}))(ae),se=n(78),oe=n.n(se),ie=n(149),ce=n.n(ie);function ue(e,t){return{type:L,payload:{token:e,userId:t}}}function le(){return function(e){localStorage.setItem("userInfo",JSON.stringify({})),localStorage.setItem("user",JSON.stringify({})),e({type:D}),e(me({})),w.a.fire({icon:"success",title:"You are successfully logged out",showConfirmButton:!1,timer:2e3})}}function me(e){return{type:J,user:e}}var pe=n(43),de=n(79),fe=n.n(de),he=n(254),ve=n(253),be=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(a.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},ge=n.n(ve)()((function(e){var t=e.windowWidth,n=e.isLoggedIn,s=e.isAdmin,o=e.logOut,i=Object(a.useState)(!0),c=Object(pe.a)(i,2),u=c[0],l=c[1],m=Object(a.useRef)();return Object(a.useEffect)((function(){t<768&&l(!1)}),[t]),be(m,(function(){u&&l(!u)})),r.a.createElement("div",{className:fe.a.main},t<768&&!u&&r.a.createElement("button",{className:fe.a.burger,onClick:function(){return l(!0)}},r.a.createElement(he.a,null)),r.a.createElement("ul",{ref:m,className:fe.a.links,style:t>768?{width:"auto"}:u?{width:"200px"}:{width:"0px"}},u&&t<768&&r.a.createElement("li",null,r.a.createElement("button",{className:fe.a.close,onClick:function(){return l(!1)}},"x")),r.a.createElement("li",null,r.a.createElement(_.b,{exact:!0,to:"/"},"HOME")),n&&r.a.createElement("li",null,r.a.createElement(_.b,{to:"/post-edit/5e0526de89356800044df417"},"ADD POST")),n&&r.a.createElement("li",null,r.a.createElement(_.b,{to:"/my-posts"},"MY POSTS")),r.a.createElement("li",null,s&&r.a.createElement(_.b,{to:"/admin"},"ADMIN")),r.a.createElement("li",null,n?r.a.createElement(_.b,{to:"/",onClick:function(){return o()}},"LOG OUT"):r.a.createElement(_.b,{to:"/authorization"},"AUTHORIZATION"))))})),Ee=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:ce.a.main},r.a.createElement("nav",{className:ce.a.navBar},r.a.createElement("div",null,r.a.createElement(_.b,{exact:!0,to:"/"},"Your diary")),r.a.createElement(ge,{isAdmin:this.props.user.isAdmin,isLoggedIn:this.props.isLoggedIn,logOut:this.props.logOut})))}}]),t}(a.Component);var _e=Object(h.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,user:e.auth.user}}),(function(e){return{logOut:function(){return e(le())}}}))(Ee);function ke(e){var t=e.editing,n=e.onChangeHandler,a=e.title,s=e.subtitle;return r.a.createElement("div",{className:oe.a.main},r.a.createElement(_e,null),r.a.createElement("div",null,t?r.a.createElement("input",{placeholder:"Title",className:oe.a.h1,type:"text",value:a,onChange:function(e){return n("title",e.target.value)}}):r.a.createElement("h1",null,a),r.a.createElement("hr",{className:oe.a.small}),t?r.a.createElement("input",{placeholder:"Subtitle",className:oe.a.p,type:"text",value:s,onChange:function(e){return n("subtitle",e.target.value)}}):r.a.createElement("p",null,s)))}var Oe=n(47),Ce=n.n(Oe),ye=n(38);function we(e){var t=e.split("T");return t[1]=t[1].slice(0,-8),t.reverse().join(" ")}var xe=function(e){var t=e.disabled,n=e.commentClickHandler,a=e.isLiked,s=e.post,o=e.likeClickHandler;function i(e){switch(e){case"comment":return t?r.a.createElement(_.b,{className:Ce.a.picLink,to:"/post/".concat(s._id)},r.a.createElement(ye.b,null)):r.a.createElement("div",{onClick:n},r.a.createElement(ye.b,null));case"like":return t?a?r.a.createElement(_.b,{className:Ce.a.picLink,to:"/post/".concat(s._id)},r.a.createElement(ye.a,null)):r.a.createElement(_.b,{className:Ce.a.picLink,to:"/post/".concat(s._id)},r.a.createElement(ye.c,null)):a?r.a.createElement("div",{onClick:function(){o(s._id)}},r.a.createElement(ye.a,null)):r.a.createElement("div",{onClick:function(){o(s._id)}},r.a.createElement(ye.c,null));default:return null}}return r.a.createElement("div",{className:Ce.a.main},r.a.createElement("p",{className:Ce.a.postedBy},"Posted by ",r.a.createElement(_.b,{to:"/user-posts/".concat(s.owner._id)},s.owner.login)," ",s.updatedAt&&s.created_at.slice(0,16)!==s.updatedAt.slice(0,16)?"updated ":"","at ",s.updatedTime?we(s.updatedAt):we(s.created_at)),r.a.createElement("span",{className:Ce.a.comment},r.a.createElement("span",null,s.comments.filter((function(e){return e.approved})).length)," ",i("comment")),r.a.createElement("span",{className:Ce.a.like},r.a.createElement("span",null,s.likes.length),i("like")),r.a.createElement("hr",null))},Pe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).likeClickHandler=function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(n.props.like(e,n.props.isLiked));case 2:t=a.sent,n.setState({isLiked:!n.state.isLiked}),t&&setTimeout((function(){return n.props.history.push("/authorization")}),2e3);case 5:case"end":return a.stop()}}))},n.state={isLiked:n.props.post.likes.some((function(e){return e.owner===n.props.userId}))},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(xe,{disabled:this.props.disabled,likeClickHandler:this.likeClickHandler,isLiked:this.props.isLiked,post:this.props.post,commentClickHandler:this.props.commentClickHandler})}}]),t}(a.Component);var je=Object(h.b)((function(e){return{}}),(function(e){return{like:function(t,n){return e(Z(t,n))}}}))(Pe),Se=n(255),He=n.n(Se);function Ie(e){var t=Object(a.useState)(""),n=Object(pe.a)(t,2),s=n[0],o=n[1];return r.a.createElement("div",{className:He.a.main},r.a.createElement("div",{className:"form-group shadow-textarea"},r.a.createElement("textarea",{value:s,className:"form-control z-depth-1",id:"exampleFormControlTextarea6",rows:"3",placeholder:"Write your comment here...",onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"col-auto"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2",onClick:function(){e.submitHandler(s),o(" ")}},"Send")))}var Ne=n(67),Fe=n(256),Te=(n(393),n(257)),Ae=n.n(Te),Le=n(258),Re=n.n(Le),Be=n(150),Me=n.n(Be),Ue=function(e){var t=Object(a.useState)(""),n=Object(pe.a)(t,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){var t=Re()(e.body),n=Ne.ContentState.createFromBlockArray(t.contentBlocks),a=Ne.EditorState.createWithContent(n);o(a)}),[e.body]),r.a.createElement(Fe.Editor,{onBlur:e.onBlurHandler,editorState:s,toolbar:{image:{alignmentEnabled:!1,uploadEnabled:!0,uploadCallback:function(t){return function(t){var n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap($(t,e.token));case 2:return n=a.sent,a.abrupt("return",{data:{link:n.data.src}});case 4:case"end":return a.stop()}}))}(t)},inputAccept:"image/jpeg,image/jpg,image/png",previewImage:!0},fontSize:{options:[8,9,10,11,12,14,16,18,24,30,36]}},wrapperClassName:Me.a.wrapperClassName,editorClassName:Me.a.editorClassName,onEditorStateChange:function(t){o(t),e.onChangeHandler("text",Ae()(Object(Ne.convertToRaw)(t.getCurrentContent())))},uploadEnabled:!0})},De=n(259),ze=n.n(De);function Ye(e){return(new(0,ze.a.Parser)).parse(e)}var Je=function(e){var t=e.isEditing,n=e.post,a=e.subtitle,s=e.title,o=e.onChangeHandler,i=e.token,c=e.isCreating,u=e.submited,l=e.errors,m=e.onSave,p=e.user,d=e.userId,f=e.commentClickHandler,h=e.isCommentsOpened,v=e.postRemoveHandler,g=e.submitHandler,E=[b.a.postBody];return t&&E.push(b.a.editing),n.title?r.a.createElement("div",{className:b.a.main},r.a.createElement(ke,{subtitle:t?a:n.subtitle,title:t?s:n.title,onChangeHandler:o,editing:t}),r.a.createElement("div",{className:E.join(" ")},t?r.a.createElement("div",null,r.a.createElement(Ue,{token:i,body:c?" ":n.text,onChangeHandler:o}),r.a.createElement("ul",{className:b.a.errors},u&&Object.values(l).map((function(e,t){return!1!==e&&r.a.createElement("li",{key:t,className:"alert alert-danger"},e)}))),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return m(n)}},"Save")):r.a.createElement("div",null,r.a.createElement("div",{className:b.a.wrap},Ye(n.text)),r.a.createElement(je,{post:n,userId:d,commentClickHandler:f})),!t&&h&&r.a.createElement(re,null),!t&&(p.isAdmin||n.owner._id===d)&&r.a.createElement("div",{className:b.a.buttons},r.a.createElement(_.b,{type:"button",className:"btn btn-success",to:"/post-edit/".concat(n._id)},"Edit"),r.a.createElement(_.b,{type:"button",className:"btn btn-danger",onClick:function(){return v()},to:"/"},"Remove")),!t&&r.a.createElement(Ie,{submitHandler:g}))):null},Ve=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).submitHandler=function(e){var t;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(n.props.setComment(n.props.match.params.id,e));case 2:t=a.sent,n.setState({isCommentsOpened:!0}),t&&setTimeout((function(){return n.props.history.push("/authorization")}),2e3);case 5:case"end":return a.stop()}}))},n.commentClickHandler=function(){return n.setState({isCommentsOpened:!n.state.isCommentsOpened})},n.postRemoveHandler=function(){n.props.removePost(n.props.singlePost._id)},n.state={isCommentsOpened:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.match?this.props.fetchSinglePost(this.props.match.params.id):this.props.fetchSinglePost(this.props.id)}},{key:"render",value:function(){return r.a.createElement(Je,{errors:this.props.errors,submited:this.props.submited,onChangeHandler:this.props.onChangeHandler,onSave:this.props.onSave,postId:this.props.postId,createPostHandler:this.props.createPostHandler,isCreating:this.props.isCreating,user:this.props.user,postRemoveHandler:this.postRemoveHandler,updatePostHandler:this.props.updatePostHandler,subtitle:this.props.subtitle,title:this.props.title,text:this.props.text,isEditing:this.props.isEditing,post:this.props.singlePost,userId:this.props.userId,commentClickHandler:this.commentClickHandler,token:this.props.token,isCommentsOpened:this.state.isCommentsOpened,isNewCommentPosted:this.state.isNewCommentPosted,removeCommentHandler:this.removeCommentHandler,submitHandler:this.submitHandler,likeClickHandler:this.likeClickHandler})}}]),t}(a.Component);var Ge=Object(h.b)((function(e){return{singlePost:e.posts.singlePost,userId:e.auth.userId,token:e.auth.token,user:e.auth.user}}),(function(e){return{fetchSinglePost:function(t){return e(W(t))},removePost:function(t){return e(ee(t))},setComment:function(t,n){return e(function(e,t){return function(n){var a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.a.awrap(S.post("/comments",{text:t,postId:e}));case 3:a=r.sent,n((s=a.data,{type:R,comment:s})),w.a.fire({icon:"success",title:"Your comment is on check by admin",showConfirmButton:!1,timer:2e3}),r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),H(r.t0,"You have to login first"),r.abrupt("return",r.t0);case 12:case"end":return r.stop()}var s}),null,null,[[0,8]])}}(t,n))}}}))(Ve),Xe=n(151),We=n.n(Xe),qe=n(260);function Ke(e){var t=e.post,n=e.admin,a=e.onRemoveHandle,s=e.onApproveHandle,o=e.likeClickHandler,i=e.userId,c=r.a.createElement("div",{className:We.a.main},r.a.createElement(_.b,{to:"/post/".concat(t._id)},r.a.createElement("h1",null,t.title),r.a.createElement("div",{className:We.a.textWrapper},Ye(t.text))),r.a.createElement(je,{disabled:!0,post:t,userId:i,likeClickHandler:o}),n&&r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){return a(t._id)}},r.a.createElement(qe.a,null)),r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){return s(t._id)}},r.a.createElement(O.a,null))));return n?!t.approved&&c:t.approved&&c}var Ze=n(261),Qe=n.n(Ze),$e=n(262),et=n.n($e),tt=function(){return r.a.createElement("div",{className:et.a.main},r.a.createElement(Qe.a,{type:"Puff",color:"#333333",height:100,width:100}))},nt=n(263),at=n.n(nt),rt=function(e){return e.loading?r.a.createElement(tt,null):r.a.createElement("div",null,e.posts.filter((function(e){return null!==e.approved})).length?e.posts.map((function(t,n){return r.a.createElement(Ke,{onApproveHandle:e.onApproveHandle,onRemoveHandle:e.onRemoveHandle,admin:e.admin,key:n,post:t,userId:e.userId,likeClickHandler:e.likeClickHandler})})):r.a.createElement("div",{className:at.a.noPost},r.a.createElement("h1",null,"You have no published posts yet"),r.a.createElement("hr",null),r.a.createElement(_.b,{type:"button",className:"btn btn-primary",to:"/post-edit/5e078a17a004ad000439a5ea"},"ADD POST")))},st=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).likeClickHandler=function(e,t){n.props.like(e,t)},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"render",value:function(){var e=this.props,t=e.userId,n=e.posts,a=e.home,s=e.loading,o=e.admin,i=this.props.id||t,c=a?o?n.filter((function(e){return null===e.approved})):n:n.filter((function(e){return e.owner._id===i}));return n.length?r.a.createElement(rt,{onApproveHandle:this.props.onApproveHandle,onRemoveHandle:this.props.onRemoveHandle,admin:o,loading:s,likeClickHandler:this.likeClickHandler,posts:c,userId:t}):r.a.createElement("h1",null,"It looks like the server is offline")}}]),t}(a.Component);var ot=Object(h.b)((function(e){return{posts:e.posts.posts,loading:e.posts.loading,userId:e.auth.userId,user:e.auth.user}}),(function(e){return{fetchPosts:function(){return e(q())},like:function(t,n){return e(Z(t,n))}}}))(st),it=function(){return r.a.createElement("div",null,r.a.createElement(ke,{title:"Clean Blog",subtitle:"A Clean Blog Theme by Start Bootstrap"}),r.a.createElement(ot,{home:!0}))},ct=function(){return r.a.createElement("div",null,r.a.createElement(ke,{title:"My posts",subtitle:"Here you can see your posts"}),r.a.createElement(ot,null))},ut=n(152),lt=n(68),mt=n(6);var pt=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).onChangeHandler=function(e,t){var a;n.setState((a={},Object(lt.a)(a,e,t),Object(lt.a)(a,"errors",Object(mt.a)({},n.state.errors,Object(lt.a)({},e,!function(e,t){var n={text:function(e){return e.replace(/<.+?>/g,"").length<=2e3&&e.replace(/<.+?>/g,"").length>=100},title:function(e){return e.length<=60&&e.length>=3},subtitle:function(e){return e.length<=80}};return n[e]&&n[e](t)}(e,t)&&"".concat(e," lenght is not valid")))),a))},n.updatePostHandler=function(){n.props.updatePost(n.state.title,n.state.subtitle,n.state.text.replace(Object(ut.a)(/<(.*?)[\0-=\?-\uFFFF]*>(([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?)|(<\/?[\0-=\?-\uFFFF]*>)|(&[\0-:<-\uFFFF]*;))<\/\1>/gi,{tag:1}),""),n.props.singlePost._id),n.props.history.push("/post/".concat(n.props.singlePost._id))},n.createPostHandler=function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.awrap(Q(n.state.title,n.state.subtitle,n.state.text.replace(Object(ut.a)(/<(.*?)[\0-=\?-\uFFFF]*>(([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*?)|(<\/?[\0-=\?-\uFFFF]*>)|(&[\0-:<-\uFFFF]*;))<\/\1>/gi,{tag:1}),"")));case 2:e=t.sent,n.props.history.push("/post/".concat(e.data._id));case 4:case"end":return t.stop()}}))},n.onSave=function(e){n.setState({submited:!0}),Object.values(n.state.errors).filter((function(e){return!1!==e})).length||("5e078a17a004ad000439a5ea"===e._id?n.createPostHandler():n.updatePostHandler())},n.state={text:"",subtitle:"",title:"",isCreating:"5e078a17a004ad000439a5ea"===n.props.match.params.id,errors:{},submited:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.match){e.next=5;break}return e.next=3,u.a.awrap(this.props.fetchSinglePost(this.props.match.params.id));case 3:e.next=7;break;case 5:return e.next=7,u.a.awrap(this.props.fetchSinglePost(this.props.id));case 7:this.setState({text:this.state.isCreating?" ":this.props.singlePost.text,subtitle:this.props.singlePost.subtitle,title:this.props.singlePost.title});case 8:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(Ge,{errors:this.state.errors,submited:this.state.submited,onSave:this.onSave,postId:this.state.postId,createPostHandler:this.createPostHandler,updatePostHandler:this.updatePostHandler,subtitle:this.state.subtitle,title:this.state.title,setSubtitle:this.setSubtitle,setTitle:this.setTitle,text:this.state.text,onChangeHandler:this.onChangeHandler,isEditing:!0,isCreating:this.state.isCreating,id:this.props.match.params.id})}}]),t}(a.Component);var dt=Object(h.b)((function(e){return{singlePost:e.posts.singlePost}}),(function(e){return{fetchSinglePost:function(t){return e(W(t))},updatePost:function(t,n,a,r){return e(function(e,t,n,a){return function(r){var s;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,s={title:e,subtitle:t,text:n},o.next=4,u.a.awrap(S.put("/posts/".concat(a),s));case 4:r({type:z,data:s}),w.a.fire({icon:"success",title:"Your post is on check by admin",showConfirmButton:!1,timer:2e3}),o.next=11;break;case 8:o.prev=8,o.t0=o.catch(0),H(o.t0,"Updating post error");case 11:case"end":return o.stop()}}),null,null,[[0,8]])}}(t,n,a,r))}}}))(pt),ft=n(264),ht=n.n(ft),vt=n(80),bt=n(599),gt=n(267),Et=n.n(gt);function _t(e){return r.a.createElement("div",{className:Et.a.main},r.a.createElement("span",null,e.left),r.a.createElement(bt.a,{disableRipple:!0,checked:e.isChecked,onChange:function(){return e.setIsChecked()}}),r.a.createElement("span",null,e.right))}var kt=function(e){var t=Object(a.useState)(!1),n=Object(pe.a)(t,2),s=n[0],o=n[1];return r.a.createElement("div",null,r.a.createElement(ke,{title:"Authorization"}),r.a.createElement(_t,{isChecked:s,setIsChecked:function(){return o(!s)},left:"Log in",right:"Sign up"}),r.a.createElement("div",{className:ht.a.auth},r.a.createElement(vt.c,{initialValues:{login:"",password:""},validationSchema:e.signupSchema,onSubmit:function(t){s?e.registerButtonHandler(t):e.loginButtonHandler(t)},isValid:!1},(function(e){var t=e.errors,n=e.touched,a=e.isValid;return r.a.createElement(vt.b,null,r.a.createElement("label",{htmlFor:"usr"},"Login:"),r.a.createElement(vt.a,{name:"login",className:"form-control"}),t.login&&n.login?r.a.createElement("div",{className:"alert alert-danger"},t.login):r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement(vt.a,{name:"password",className:"form-control",type:"password"}),t.password&&n.password?r.a.createElement("div",{className:"alert alert-danger"},t.password):r.a.createElement("br",null),s?r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!a},"Sign up"):r.a.createElement("button",{type:"submit",className:"btn btn-info",disabled:!a},"Log in"))}))))},Ot=n(109),Ct=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).registerButtonHandler=function(e){var t,a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.login,a=e.password,r.next=3,u.a.awrap(n.props.registerUser(t,a));case 3:setTimeout((function(){return n.props.history.push("/")}),2e3);case 4:case"end":return r.stop()}}))},n.loginButtonHandler=function(e){var t,a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.login,a=e.password,r.next=3,u.a.awrap(n.props.loginUser(t,a));case 3:setTimeout((function(){return n.props.history.push("/")}),2e3);case 4:case"end":return r.stop()}}))},n.state={login:"",password:""},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=Ot.object().shape({login:Ot.string().min(5,"Too Short!").max(16,"Too Long!").required("Required"),password:Ot.string().min(5,"Too Short!").max(32,"Too Long!").required("Required")});return r.a.createElement(kt,{registerButtonHandler:this.registerButtonHandler,loginButtonHandler:this.loginButtonHandler,login:this.state.login,password:this.state.password,signupSchema:e})}}]),t}(a.Component);var yt=Object(h.b)(null,(function(e){return{loginUser:function(t,n){return e(function(e,t){return function(n){var a,r,s;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,u.a.awrap(S.post("/login",{login:e,password:t}));case 3:return a=o.sent,n(ue(a.data.token,a.data.userId)),r={token:a.data.token,userId:a.data.userId},localStorage.setItem("userInfo",JSON.stringify(r)),o.next=9,u.a.awrap(S.get("/users/".concat(a.data.userId)));case 9:s=o.sent,localStorage.setItem("user",JSON.stringify(s.data)),n(me(s.data)),w.a.fire({icon:"success",title:"You are successfully logged in",showConfirmButton:!1,timer:2e3}),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(0),H(o.t0,"Auth error");case 18:case"end":return o.stop()}}),null,null,[[0,15]])}}(t,n))},registerUser:function(t,n){return e(function(e,t){return function(n){var a,r,s;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,u.a.awrap(S.post("/register",{login:e,password:t}));case 3:return a=o.sent,n(ue(a.data.token,a.data.userId)),r={token:a.data.token,userId:a.data.userId},localStorage.setItem("userInfo",JSON.stringify(r)),o.next=9,u.a.awrap(S.get("/users/".concat(a.data.userId)));case 9:s=o.sent,localStorage.setItem("user",JSON.stringify(s.data)),n(me(s.data)),w.a.fire({icon:"success",title:"Registration complete",showConfirmButton:!1,timer:2e3}),o.next=18;break;case 15:o.prev=15,o.t0=o.catch(0),H(o.t0,"Auth error");case 18:case"end":return o.stop()}}),null,null,[[0,15]])}}(t,n))}}}))(Ct),wt=n(270),xt=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.component,n=e.admin,a=e.user,s=e.isLoggedIn,o=Object(wt.a)(e,["component","admin","user","isLoggedIn"]);return r.a.createElement(i.b,Object.assign({},o,{render:function(e){return n?a.isAdmin?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/404"}):s?r.a.createElement(t,e):r.a.createElement(i.a,{to:"/authorization"})}}))}}]),t}(a.Component);var Pt=Object(h.b)((function(e){return{isLoggedIn:e.auth.isLoggedIn,user:e.auth.user}}))(xt);var jt=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.getUser(this.props.match.params.id)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ke,{title:"Posts maded by ".concat(this.props.user.login),subtitle:"Here you can see ".concat(this.props.user.login,"'s posts")}),r.a.createElement(ot,{id:this.props.match.params.id}))}}]),t}(a.Component);var St=Object(h.b)((function(e){return{user:e.users.user}}),(function(e){return{getUser:function(t){return e(function(e){return function(t){var n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.a.awrap(S.get("/users/".concat(e)));case 3:n=a.sent,t((r=n.data,{type:Y,user:r})),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),H(a.t0,"Get user error");case 10:case"end":return a.stop()}var r}),null,null,[[0,7]])}}(t))}}}))(jt),Ht=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(p.a)(this,Object(d.a)(t).call(this,e))).onApproveHandle=function(e){n.props.approvePost(e)},n.onRemoveHandle=function(e){n.props.removePost(e)},n.setIsChecked=function(){n.setState({isChecked:!n.state.isChecked})},n.state={isChecked:!1},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ke,{title:"Admin Panel",subtitle:"Here you can approve or remove new posts or comments"}),r.a.createElement(_t,{isChecked:this.state.isChecked,setIsChecked:this.setIsChecked,left:"Comment",right:"Posts"}),this.state.isChecked?r.a.createElement(ot,{onApproveHandle:this.onApproveHandle,onRemoveHandle:this.onRemoveHandle,admin:!0}):r.a.createElement(re,{adminPanel:!0}))}}]),t}(a.Component);var It=Object(h.b)((function(e){return{singlePost:e.posts.singlePost}}),(function(e){return{approvePost:function(t){return e(function(e){return function(t){var n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n={approved:!0},a.next=4,u.a.awrap(S.put("/posts/".concat(e),n));case 4:t(q()),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),H(a.t0,"Post approve error");case 10:case"end":return a.stop()}}),null,null,[[0,7]])}}(t))},removePost:function(t){return e(ee(t))}}}))(Ht);var Nt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:it}),r.a.createElement(i.b,{path:"/post/:id",component:Ge}),r.a.createElement(i.b,{path:"/authorization",component:yt}),r.a.createElement(Pt,{path:"/my-posts",component:ct}),r.a.createElement(i.b,{path:"/user-posts/:id",component:St}),r.a.createElement(i.b,{path:"/post-edit/:id",component:dt}),r.a.createElement(Pt,{admin:!0,path:"/admin",component:It}),r.a.createElement(i.a,{to:"/"})))},Ft=n(45),Tt={posts:[],singlePost:{},loading:!1};var At=localStorage.getItem("userInfo");At=JSON.parse(At)||{};var Lt=localStorage.getItem("user");Lt=JSON.parse(Lt)||{};var Rt={userId:At.userId,token:At.token,isLoggedIn:!!At.token,user:Lt};var Bt={user:{}};var Mt={comments:[]};var Ut=Object(Ft.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(mt.a)({},e,{loading:!0});case N:return Object(mt.a)({},e,{loading:!1,posts:t.posts});case F:return Object(mt.a)({},e,{loading:!0});case T:return Object(mt.a)({},e,{loading:!1,singlePost:t.singlePost});case A:return Object(mt.a)({},e,{loading:!1,error:t.error});case R:var n=e.singlePost.comments.slice();return n.push(t.comment),Object(mt.a)({},e,{singlePost:Object(mt.a)({},e.singlePost,{comments:n})});case B:return Object(mt.a)({},e,{singlePost:Object(mt.a)({},e.singlePost,{comments:e.singlePost.comments.filter((function(e){return e._id!==t.comment._id}))})});case M:var a=e.singlePost.likes.slice();return a.push(t.like),Object(mt.a)({},e,{singlePost:Object(mt.a)({},e.singlePost,{likes:a})});case U:return Object(mt.a)({},e,{singlePost:Object(mt.a)({},e.singlePost,{likes:e.singlePost.likes.filter((function(e){return e._id!==t.like._id}))})});case z:return Object(mt.a)({},e,{singlePost:Object(mt.a)({},e.singlePost,{},t.data)});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(mt.a)({},e,{userId:t.payload.userId,token:t.payload.token,isLoggedIn:!!At.token});case D:return Object(mt.a)({},e,{userId:"",token:"",isLoggedIn:!1});case J:return Object(mt.a)({},e,{user:t.user});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(mt.a)({},e,{user:t.user});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(mt.a)({},e,{comments:t.comments});case G:return Object(mt.a)({},e,{comments:e.comments.filter((function(e){return e._id!==t.id}))});case X:var n=e.comments.map((function(e){return e._id===t.id&&(e.approved=!0),e}));return Object(mt.a)({},e,{comments:n});default:return e}}}),Dt=n(269);n.d(t,"store",(function(){return Yt}));var zt="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):Ft.d,Yt=Object(Ft.e)(Ut,zt(Object(Ft.a)(Dt.a)));o.a.render(r.a.createElement(h.a,{store:Yt},r.a.createElement(_.a,null,r.a.createElement(Nt,null))),document.getElementById("root"))},69:function(e,t,n){e.exports={comment:"Comments_comment__13XYb",remove:"Comments_remove__30r7n",buttons:"Comments_buttons__3FWsz",main:"Comments_main__1MZE5"}},78:function(e,t,n){e.exports={main:"Header_main__2r9vH",small:"Header_small__1EU7f",h1:"Header_h1__31UXp",p:"Header_p__XPuGP"}},79:function(e,t,n){e.exports={main:"Menu_main__T4zCW",links:"Menu_links__LQVlq",close:"Menu_close__3Adea",burger:"Menu_burger__15Dyr"}}},[[272,1,2]]]);
//# sourceMappingURL=main.5cb673ba.chunk.js.map