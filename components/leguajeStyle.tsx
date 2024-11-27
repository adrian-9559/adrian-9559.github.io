import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image, Card } from "@nextui-org/react";

export default function lenguajeStyle() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <section className="w-auto h-auto">
            <Button key="Lenguaje de Estilado" onPress={onOpen} className="flex flex-col gap-2 h-auto bg-default-500 bg-opacity-50 p-4 rounded-3xl">
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <h5 className="text-2xl">Estilado</h5>
                    </div>
                </div>
                <div className="my-2 px-4 flex flex-col gap-3">
                    <div className="flex gap-10 justify-center items-center">
                        <Card className="w-full bg-default-500 bg-opacity-0 shadow-none">
                            <Image alt="logo CSS" src="/images/css_logo.png"></Image>
                        </Card>
                        <Card className="w-full bg-default-500 bg-opacity-0 shadow-none">
                            <Image alt="logo SaSS" src="/images/Sass_logo.png"></Image>
                        </Card>
                    </div>
                    <div>
                        <p className="text-default-500 animate-pulse">Pulsa para más</p>
                    </div>
                </div>
            </Button>
            <Modal isOpen={isOpen} onClose={onOpenChange} backdrop="blur" size="lg">
                <ModalContent>
                    {(onClose) => (
                        <section>
                            <ModalHeader className="border-b-[1px] border-default-300">
                                <h5 className="text-2xl">Leguajes de Estilado</h5>
                            </ModalHeader>
                            <ModalBody>
                                <section className="flex flex-col gap-4">
                                    <p>
                                        Durante mi trayectoria, he desarrollado habilidades en una variedad de lenguajes y herramientas de estilado que he utilizado para definir y perfeccionar el diseño de numerosos proyectos. 
                                    </p>
                                    <p>    
                                        Estas tecnologías han sido clave para crear interfaces que combinan un diseño atractivo con la capacidad de adaptarse de manera eficiente a distintos dispositivos y tamaños de pantalla. 
                                    </p>
                                    <p>
                                        Mi enfoque siempre ha estado en garantizar que cada proyecto ofrezca una experiencia visual agradable y funcional, adaptada a las expectativas de los usuarios y a los estándares actuales de diseño responsivo.
                                    </p>
                                </section>
                            </ModalBody>
                            <ModalFooter>
                                <Button key="Cerrar modal Lenguajes de Estilado" onPress={onClose} color="danger" className="bg-opacity-45">Cerrar</Button>
                            </ModalFooter>
                        </section>
                    )}
                </ModalContent>
            </Modal>
        </section>
    )
}