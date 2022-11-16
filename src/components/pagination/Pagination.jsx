import React, { useEffect, useState } from 'react'
import { ButtonPagination, ContainerPagination, Li, Ul } from './styles'

const USER_PER_PAGE = 4;

export const Pagination = ({ listUsers }) => {
    console.log("Render Pagination")

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const initPagination = currentPage * USER_PER_PAGE

    useEffect(() => {
        setTotalPages(Math.ceil(listUsers.length / USER_PER_PAGE))
    }, [listUsers])


    const handleStartAgain = () => setCurrentPage(1);

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    const handleNext = () => setCurrentPage(currentPage + 1);

    const handleFinish = () => setCurrentPage(totalPages)

    const handleClickPagination = (index) => setCurrentPage(index + 1);

    return (
        <ContainerPagination>
            <nav>
                <Ul>
                    <Li>
                        <ButtonPagination
                            onClick={handleStartAgain}
                            active={false}
                            disabled={currentPage === 1}>
                            &laquo;{/* Simbol << */}
                        </ButtonPagination>
                    </Li>
                    <Li>
                        <ButtonPagination
                            onClick={handlePrevious}
                            active={false}
                            disabled={currentPage === 1}>
                            &lt; {/* Simbol < */}
                        </ButtonPagination>
                    </Li>

                    {
                        Array.from(Array(totalPages).keys()).map((_, index) => <Li key={index}>
                            <ButtonPagination
                                onClick={() => handleClickPagination(index)}
                                active={currentPage === index + 1}
                                disabled={false}> {index + 1}
                            </ButtonPagination>
                        </Li>)
                    }

                    <Li>
                        <ButtonPagination
                            onClick={handleNext}
                            active={false}
                            disabled={currentPage === totalPages}>
                            &gt; {/* Simbol > */}
                        </ButtonPagination>
                    </Li>
                    <Li>
                        <ButtonPagination
                            onClick={handleFinish}
                            active={false}
                            disabled={currentPage === totalPages}>
                            &raquo; {/* Simbol >> */}
                        </ButtonPagination>
                    </Li>
                </Ul>
            </nav>
        </ContainerPagination>
    )
}
