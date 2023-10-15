const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularArea() {
    rl.question('Selecione a forma geométrica (1-retângulo, 2-triângulo, 3-quadrado, 4-trapézio, 5-polígono regular, 6-cilindro, 7-cone, 8-esfera, 9-prisma, 10-polígono irregular): ', (opcao) => {
        switch (opcao) {
            case '1':
                rl.question('Digite a altura do retângulo: ', (altura) => {
                    rl.question('Digite a largura do retângulo: ', (largura) => {
                        const area = parseFloat(altura) * parseFloat(largura);
                        console.log(`A área do retângulo é ${area}`);
                        rl.close();
                    });
                });
                break;
            case '2':
                rl.question('Digite a base do triângulo: ', (base) => {
                    rl.question('Digite a altura do triângulo: ', (altura) => {
                        const area = (parseFloat(base) * parseFloat(altura)) / 2;
                        console.log(`A área do triângulo é ${area}`);
                        rl.close();
                    });
                });
                break;
            case '3':
                rl.question('Digite o lado do quadrado: ', (lado) => {
                    const area = parseFloat(lado) * parseFloat(lado);
                    console.log(`A área do quadrado é ${area}`);
                    rl.close();
                });
                break;
            case '4':
                rl.question('Digite a base maior do trapézio: ', (baseMaior) => {
                    rl.question('Digite a base menor do trapézio: ', (baseMenor) => {
                        rl.question('Digite a altura do trapézio: ', (altura) => {
                            const area = ((parseFloat(baseMaior) + parseFloat(baseMenor)) * parseFloat(altura)) / 2;
                            console.log(`A área do trapézio é ${area}`);
                            rl.close();
                        });
                    });
                });
                break;
            case '5':
                rl.question('Digite o número de lados do polígono regular: ', (numLados) => {
                    rl.question('Digite o comprimento de um lado: ', (comprimentoLado) => {
                        const n = parseFloat(numLados);
                        const s = parseFloat(comprimentoLado);
                        const area = (n * s * s) / (4 * Math.tan(Math.PI / n));
                        console.log(`A área do polígono regular é ${area}`);
                        rl.close();
                    });
                });
                break;
            case '6':
                rl.question('Digite o raio da base do cilindro: ', (raio) => {
                    rl.question('Digite a altura do cilindro: ', (altura) => {
                        const r = parseFloat(raio);
                        const h = parseFloat(altura);
                        const area = 2 * Math.PI * r * (r + h);
                        console.log(`A área do cilindro é ${area}`);
                        rl.close();
                    });
                });
                break;
            case '7':
                rl.question('Digite o raio da base do cone: ', (raio) => {
                    rl.question('Digite a altura do cone: ', (altura) => {
                        const r = parseFloat(raio);
                        const h = parseFloat(altura);
                        const slantHeight = Math.sqrt(r * r + h * h);
                        const area = Math.PI * r * (r + slantHeight);
                        console.log(`A área do cone é ${area}`);
                        rl.close();
                    });
                });
                break;
            case '8':
                rl.question('Digite o raio da esfera: ', (raio) => {
                    const r = parseFloat(raio);
                    const area = 4 * Math.PI * r * r;
                    console.log(`A área da esfera é ${area}`);
                    rl.close();
                });
                break;
            case '9':
                rl.question('Digite o número de lados da base: ', (numLados) => {
                    rl.question('Digite o comprimento de um lado da base: ', (comprimentoLado) => {
                        rl.question('Digite a altura da base: ', (alturaBase) => {
                            rl.question('Digite a altura do prisma: ', (alturaPrisma) => {
                                const n = parseFloat(numLados);
                                const s = parseFloat(comprimentoLado);
                                const hBase = parseFloat(alturaBase);
                                const hPrisma = parseFloat(alturaPrisma);
                                const areaBase = (n * s * hBase) / 2;
                                const areaLateral = n * s * hPrisma;
                                const area = 2 * areaBase + areaLateral;
                                console.log(`A área do prisma é ${area}`);
                                rl.close();
                            });
                        });
                    });
                });
                break;
            case '10':
                const vertices = [];

                function calcularAreaIrregular() {
                    let area = 0;

                    for (let i = 0; i < vertices.length; i++) {
                        const x1 = vertices[i][0];
                        const y1 = vertices[i][1];
                        const x2 = vertices[(i + 1) % vertices.length][0];
                        const y2 = vertices[(i + 1) % vertices.length][1];
                        area += (x1 * y2 - x2 * y1);
                    }

                    area = Math.abs(area) / 2;
                    console.log(`A área do polígono irregular é ${area}`);
                    rl.close();
                }

                function pedirCoordenadas() {
                    rl.question('Informe a coordenada x do vértice: ', (x) => {
                        rl.question('Informe a coordenada y do vértice: ', (y) => {
                            const xCoord = parseFloat(x);
                            const yCoord = parseFloat(y);
                            vertices.push([xCoord, yCoord]);
                            rl.question('Deseja inserir mais vértices? (sim/não): ', (resposta) => {
                                if (resposta.toLowerCase() === 'sim') {
                                    pedirCoordenadas();
                                } else {
                                    calcularAreaIrregular();
                                }
                            });
                        });
                    });
                }

                pedirCoordenadas();
                break;
            default:
                console.log('Opção inválida');
                rl.close();
                break;
        }
    });
}

calcularArea();
