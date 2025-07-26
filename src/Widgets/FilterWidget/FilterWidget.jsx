import React, { useState } from 'react'
import { Box, Divider, Typography, FormControlLabel, Checkbox } from '@mui/material'
import CheckboxGroup from '../Checkboxes/CheckboxGroup'
import CustomButton from '../button/CustomButton'
import './FilterWidget.css'

const FilterWidget = ({ className = '', onSearch = () => {} }) => {
    const [isOtherBranch, setIsOtherBranch] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState(['current'])

    const categoryOptions = [
        { label: 'Current Batch', value: 'current' },
        { label: 'Passed Out', value: 'passed' },
        { label: 'Long Absent', value: 'absent' },
        { label: 'All', value: 'all' },
        { label: 'Drop Out', value: 'drop' }
    ]

    const handleCategoryChange = (value) => {
        setSelectedCategories((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        )
    }

    const handleSearch = () => {
        console.log('Selected filters:', {
            isOtherBranch,
            selectedCategories
        })
        onSearch(); // Call the passed onSearch handler
    }

    const rootClass = `filter-widget ${className}`.trim();

    return (
        <Box p={2} className={rootClass}>
            <Typography className="filter-widget__heading" fontWeight="bold">Filter</Typography>
            <FormControlLabel
                className="filter-widget__checkbox"
                control={
                    <Checkbox
                        checked={isOtherBranch}
                        onChange={(e) => setIsOtherBranch(e.target.checked)}
                        sx={{
                            '&.Mui-checked': {
                                color: '#3425FF',
                            }
                        }} />
                }
                label="Other Branch"
            />
            <div className="filter-widget__section-line">
                <Typography className="filter-widget__section-label">Location</Typography>
                <Typography className="filter-widget__section-toggle"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1666 7.00001C15.1666 6.69059 15.0437 6.39384 14.8249 6.17505C14.6061 5.95626 14.3093 5.83334 13.9999 5.83334C13.6905 5.83334 13.3938 5.95626 13.175 6.17505C12.9562 6.39384 12.8333 6.69059 12.8333 7.00001V12.8333H6.99992C6.6905 12.8333 6.39375 12.9563 6.17496 13.1751C5.95617 13.3938 5.83325 13.6906 5.83325 14C5.83325 14.3094 5.95617 14.6062 6.17496 14.825C6.39375 15.0438 6.6905 15.1667 6.99992 15.1667H12.8333V21C12.8333 21.3094 12.9562 21.6062 13.175 21.825C13.3938 22.0438 13.6905 22.1667 13.9999 22.1667C14.3093 22.1667 14.6061 22.0438 14.8249 21.825C15.0437 21.6062 15.1666 21.3094 15.1666 21V15.1667H20.9999C21.3093 15.1667 21.6061 15.0438 21.8249 14.825C22.0437 14.6062 22.1666 14.3094 22.1666 14C22.1666 13.6906 22.0437 13.3938 21.8249 13.1751C21.6061 12.9563 21.3093 12.8333 20.9999 12.8333H15.1666V7.00001Z" fill="black" />
                </svg>
                </Typography>
            </div>

            <div className="filter-widget__section-line">
                <Typography className="filter-widget__section-label">Student Details</Typography>
                <Typography className="filter-widget__section-toggle"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.1666 7.00001C15.1666 6.69059 15.0437 6.39384 14.8249 6.17505C14.6061 5.95626 14.3093 5.83334 13.9999 5.83334C13.6905 5.83334 13.3938 5.95626 13.175 6.17505C12.9562 6.39384 12.8333 6.69059 12.8333 7.00001V12.8333H6.99992C6.6905 12.8333 6.39375 12.9563 6.17496 13.1751C5.95617 13.3938 5.83325 13.6906 5.83325 14C5.83325 14.3094 5.95617 14.6062 6.17496 14.825C6.39375 15.0438 6.6905 15.1667 6.99992 15.1667H12.8333V21C12.8333 21.3094 12.9562 21.6062 13.175 21.825C13.3938 22.0438 13.6905 22.1667 13.9999 22.1667C14.3093 22.1667 14.6061 22.0438 14.8249 21.825C15.0437 21.6062 15.1666 21.3094 15.1666 21V15.1667H20.9999C21.3093 15.1667 21.6061 15.0438 21.8249 14.825C22.0437 14.6062 22.1666 14.3094 22.1666 14C22.1666 13.6906 22.0437 13.3938 21.8249 13.1751C21.6061 12.9563 21.3093 12.8333 20.9999 12.8333H15.1666V7.00001Z" fill="black" />
                </svg>
                </Typography>
            </div>
            <Divider className="filter-widget__divider" sx={{ my: 2 }} />
            <Typography className="filter-widget__category-title" fontWeight="bold">
                Student Category
            </Typography>
            <CheckboxGroup
                options={categoryOptions}
                selectedOptions={selectedCategories}
                onChange={handleCategoryChange}
            />
            <CustomButton
                className="filter-widget__button"
                label="Search"
                onClick={handleSearch}
            />
        </Box>
    )
}

export default FilterWidget