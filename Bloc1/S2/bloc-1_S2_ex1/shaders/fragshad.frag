#version 330 core

out vec4 FragColor;

void main() {
    FragColor = vec4(1, 0, 0, 1); // Vermell
	if(gl_FragCoord.x > 354.) FragColor = vec4(0, 0, 1, 1); // Blau
	if(gl_FragCoord.x > 354. && gl_FragCoord.y <= 354.) FragColor = vec4(0, 1, 0, 1); // Blau
	if(gl_FragCoord.x <= 354. && gl_FragCoord.y <= 354.) FragColor = vec4(1, 1, 0, 1); // Groc
}

