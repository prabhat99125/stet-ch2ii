const iptm = document.querySelector("#m");
const iptn = document.querySelector("#n");
const iptr = document.querySelector("#r");
const iptx = document.querySelector("#x");
const btn = document.querySelector("#submit");
const htmlappend = document.querySelector("#htmlappend");

let m; let n; let r; let x;
let mSum; let xSum; let nsum; let r_xsum; let m_nSum; let rSum;

btn.addEventListener("click", () => {
    m = Number(iptm.value);
    n = Number(iptn.value)
    r = Number(iptr.value);
    x = Number(iptx.value);
    htmlfunction()
});

function htmlfunction() {
    console.log(m+n, r);
    console.log(fectup(m+n, r));
    console.log(fectwrit(fectup(m+n, r)));
    mSum = eval(fectwrit(fectup(m, x)));
    xSum = eval(fectwrit(fectdown(x)));
    nsum = eval(fectwrit(fectup(n, r - x)))
    r_xsum = eval(fectwrit(fectdown(r - x)))
    m_nSum = eval(fectwrit(fectup(m + n, r)))
    rSum = eval(fectwrit(fectdown(r)));
    let html = `<div class="formul">
                <div class="px">P(x) = </div>
                <div class="pxfind">
                    <p><sup>m</sup>C<sub>x</sub> * <sup>n</sup>C<sub>(r-x)</sub></p>
                    <hr size="2" color="black">
                    <p><sup>(m+n)</sup>C<sub>r</sub></p>
                </div>
            </div>`;
    html += `<div class="formul">
                <div class="px">P(${x}) = </div>
                <div class="pxfind">
                    <p><sup>${m}</sup>C<sub>${x}</sub> * <sup>${n}</sup>C<sub>(${r}-${x})</sub></p>
                    <hr size="2" color="black">
                    <p><sup>(${m}+${n})</sup>C<sub>${r}</sub></p>
                </div>
            </div>`;
    html += `<div class="formul">
                <div class="px">P(${x}) = </div>
                <div class="pxfind">
                    <p><sup>${m}</sup>C<sub>${x}</sub> * <sup>${n}</sup>C<sub>${r - x}</sub></p>
                    <hr size="2" color="black">
                    <p><sup>${m + n}</sup>C<sub>${r}</sub></p>
                </div>
            </div>`;
    html += ` <div class="formul over">
                <div class="px">P(${x}) = </div>
                <div class="pxfind">
                    <div class="flex">
                        <p>${fectwrit(fectup(m, x))}</p>
                        <hr>
                        <p>${fectwrit(fectdown(x))}</p>
                    </div>
                    <div class="flex mult">
                        <p>*</p>
                    </div>
                    <div class="flex">
                        <p>${fectwrit(fectup(n, r - x))}</p>
                        <hr>
                        <p>${fectwrit(fectdown(r - x))}</p>
                    </div>

                    <hr size="2" color="black">
                    <p>${fectwrit(fectup(m + n, r))}</p>
                    <hr>
                    <p>${fectwrit(fectdown(r))}</p>


                </div>
            </div>`;
    html += ` <div class="formul">
            <div class="px">P(${x}) = </div>
            <div class="pxfind">
                <div class="flex">
                    <p>${mSum}</p>
                    <hr>
                    <p>${xSum}</p>
                </div>
                <div class="flex mult">
                    <p>*</p>
                </div>
                <div class="flex">
                    <p>${nsum}</p>
                    <hr>
                    <p>${r_xsum}</p>
                </div>

                <hr size="2" color="black">
                <p>${m_nSum}</p>
                <hr>
                <p>${rSum}</p>


            </div>
        </div>`;console.log(m_nSum)
    html += `<div class="formul">
        <div class="px">P(${x}) = </div>
        <div class="pxfind">
            <p>${mSum / xSum} * ${nsum / r_xsum}</p>
            <hr size="2" color="black">
            <p>${m_nSum / rSum}</p>
        </div>
    </div>`;
    html += `<div class="formul">
        <div class="px">P(${x}) = </div>
        <div class="pxfind">
            <p>${mSum / xSum * nsum / r_xsum}</p>
            <hr size="2" color="black">
            <p>${m_nSum / rSum}</p>
        </div>
    </div>`;
    html += `<div class="formul">
        <div class="px">P(${x}) = </div>
        <div class="pxfind ans">
            <p>${(mSum / xSum * nsum / r_xsum) / (m_nSum / rSum)}</p>
        </div>
    </div>`;

    htmlappend.innerHTML = html;
}
const fectwrit = (a) => {
    if (a===1) {
        return 1;
    } else {
        let sum = []
        let text = "";
    for (i of a) {
        sum.push(i);
    }
    for (i = 0; i < sum.length; i++) {
        if (i === sum.length - 1) {
            text += `${sum[i]}`
        } else {
            text += `${sum[i]}*`;
        }
    }
    return text
    }
    
}
const fectup = (a, b) => {
    let fectorialup = [];
    if (b === 0) {
        fectorialup.push(1)
    } else {
        for (i = a; i > a - b; i--) {
            fectorialup.push(i)
        }
    }
    return fectorialup;
}
const fectdown = (a) => {
    let fectorialdown = [];
    for (i = a; i >= 1; i--) {
        fectorialdown.push(i);
    }
    if (a === 0 ) {
        return 1;
    } else {
        return fectorialdown;
    }
    
}
const fect = (a) => {
    let fecttorial = 1;
    let creatarr = a.map((value) => {
        fecttorial *= value;
    });
    return fecttorial;
}
