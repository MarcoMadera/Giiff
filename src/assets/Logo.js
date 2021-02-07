export default function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="157.656 21.183 184.688 107.635"
      style={{
        background: "transparent",
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-crystal"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feMorphology
            operator="dilate"
            radius={2}
            in="SourceGraphic"
            result="border"
          />
          <feFlood floodColor="#fff" result="black" />
          <feMorphology
            operator="dilate"
            radius={2}
            in="SourceGraphic"
            result="erode"
          />
          <feGaussianBlur in="erode" stdDeviation={4} result="blur" />
          <feOffset in="blur" dx={2} dy={2} result="offset" />
          <feComposite operator="atop" in="offset" in2="black" result="merge" />
          <feComposite
            operator="in"
            in="merge"
            in2="SourceGraphic"
            result="inner-shadow"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={2.5}
            result="shadow1"
          />
          <feOffset in="shadow1" dy={5} result="shadow" />
          <feSpecularLighting
            in="SourceGraphic"
            result="specular"
            surfaceScale={1.5}
            specularConstant={100}
            specularExponent={10}
            lightingColor="#fff"
          >
            <fePointLight x={250} y={-300} z={-400} />
          </feSpecularLighting>
          <feGaussianBlur in="specular" stdDeviation={1} result="specular2" />
          <feComposite
            operator="in"
            in="specular2"
            in2="SourceAlpha"
            result="specular3"
          />
          <feMerge result="merge">
            <feMergeNode in="border" />
            <feMergeNode in="inner-shadow" />
            <feMergeNode in="specular3" />
          </feMerge>
          <feComponentTransfer in="merge" result="final">
            <feFuncA type="linear" slope={0.9} />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="shadow" />
            <feMergeNode in="final" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#prefix__editing-crystal)">
        <path
          d="M210.895 54.555h0q6.46 0 12.03 2.88h0l-1.02 4.86-.64.13h0q-3.07-1.92-5.67-2.75h0q-2.59-.84-5.47-.84h0q-13.89 0-13.89 17.16h0q0 8.25 3.24 12.12h0q3.23 3.88 10.01 3.88h0q1.79 0 3.62-.32h0q1.82-.32 4.7-1.22h0l.13-4.8-.06-6.14 4.8-.39-.13 5.83.25 8.96h0q-4.16 1.28-7.36 1.85h0q-3.2.58-6.2.58h0q-9.16 0-13.73-5.19h0q-4.58-5.18-4.58-14.97h0q0-10.56 5.19-16.1h0q5.18-5.53 14.78-5.53h0zm26.56 9.47l-.19 21.89.13 9.98h-4.74l.19-9.6-.19-22.27h4.8zm16.58 0l-.2 21.89.13 9.98h-4.73l.19-9.6-.19-22.27h4.8zm22.01 3.84l-5.82.06-.07 10.5 5.51.06 5.63-.19.32.45-.32 3.65-6.08-.07-5.12.07v3.52l.13 9.98h-4.74l.13-9.6-.13-22.27h18.56l.26.38-.39 3.71-7.87-.25zm24.77 0l-5.82.06-.07 10.5 5.51.06 5.63-.19.32.45-.32 3.65-6.08-.07-5.12.07v3.52l.13 9.98h-4.74l.13-9.6-.13-22.27h18.56l.26.38-.39 3.71-7.87-.25z"
          stroke="#88e0eb"
          strokeWidth={1.5}
        />
      </g>
      <style />
    </svg>
  );
}
