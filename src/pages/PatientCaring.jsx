
import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import groupIcon from './../assets/patientCa/Group.png'
import check from './../assets/patientCa/check.png'

export default function PatientCaring(){
    let secondaryColor = window.getComputedStyle(document.documentElement).getPropertyValue('--secondary');

    return (<Box sx={{ backgroundColor: secondaryColor, height: "75vh", display: "flex", justifyContent: "start", padding: "65px 143px 65px 143px" }} >
        <Box sx={{ width: "50vw" }}>
            <Box>
                <img src={groupIcon} alt="group" />
            </Box>
        </Box>
        <Box sx={{ width: "50vw", textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: "80px", paddingLeft: "30px" }}>
            <Typography sx={{
                fontFamily: "Poppins",
                fontWeight: "600",
                fontSize: "16px",
                color: "rgba(42, 167, 255, 1)"
            }}>
                HELPING PATIENTS FROM AROUND THE GLOBE!!
                <Typography sx={{
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "48px",
                    color: "black"
                }}>
                    Patient <span style={{ color: "primary" }}>Caring</span>
                </Typography>
            </Typography>
            <Typography sx={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "17px",
                color: "rgba(119, 130, 157, 1)"
            }}>
                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
            </Typography>
            <Box sx={{ height: "20px", width: "70%" }}>
                <Typography sx={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "18px",
                    textAlign: "left",
                    color: "rgba(27, 60, 116, 1)"
                }}>
                    <img src={check} alt="check" style={{ height: "20px", width: "20px", marginRight: "10px" }} />
                    Stay Updated About Your Health
                </Typography>
            </Box>
            <Box sx={{ height: "20px", width: "60%" }}>
                <Typography sx={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    textAlign: "left",
                    fontSize: "18px",
                    color: "rgba(27, 60, 116, 1)"
                }}>
                    <img src={check} alt="check" style={{ height: "20px", width: "20px", marginRight: "10px" }} />
                    Check Your Results Online
                </Typography>
            </Box>
            <Box sx={{ height: "20px", width: "70%" }}>
                <Typography sx={{
                    fontFamily: "Roboto",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "rgba(27, 60, 116, 1)",
                    textAlign: "left"
                }}>
                    <img src={check} alt="check" style={{ height: "20px", width: "20px", marginRight: "10px" }} />
                    Manage Your Appointments
                </Typography>
            </Box>

        </Box>
    </Box>)
}