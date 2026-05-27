<b>Electron Probe Microanalyzer (EPMA) and the Need for ZAF Correction :</b><br><br>

Electron Probe Microanalyzer (EPMA) is a characterization technique used to determine the precise composition of samples using Wavelength Dispersive X-ray Spectroscopy (WDS). In this technique, a focused electron beam bombards the sample, generating characteristic X-rays. These X-rays are then collimated and diffracted by analysing crystals with known lattice spacings before being collected by a detector. The entire setup is mounted on a goniometer, ensuring that the distances between the sample, diffracting crystal, and detector remain constant, as shown in figure 1<br><br>

To acquire X-ray spectra over a wide wavelength range, the spectrometer contains multiple analysing crystals with different lattice spacings. Each crystal is selected based on the wavelength of the characteristic X-rays to satisfy Bragg’s law of diffraction. The commonly used analysing crystals include :<br>

•	Lithium fluoride (LiF (200)) – Small lattice spacing (0.4 nm), used for elements from Ca to Ge <br>
•	Pentaerythritol (PET (002)) – Medium lattice spacing (0.87 nm), used for elements from Si to Ti <br>
•	Thallium acid phthalate (TAP (100)) – Large lattice spacing (2.6 nm), used for elements from O to Al <br>
•	LSM80E – Very large spacing (7.8 nm), used for elements from B to O <br><br>

Once the characteristic X-rays are diffracted, they are detected and converted into an intensity spectrum, representing the chemical composition of the sample. However, to ensure accurate quantification, raw data must be corrected for matrix effects using the ZAF correction model. <br><br>

<img src="images\img_1.png"><br><br>

<b>Need for ZAF Correction :</b><br>

The measured X-ray intensities do not directly correspond to element concentrations due to interactions within the sample matrix. The three main correction factors in the ZAF model are : <br><br>

•	<b>Atomic Number Effect (Z) :</b> The atomic number effect in quantitative X-ray analysis is influenced by two key factors: backscattering (R) and stopping power (S), both of which determine the amount of X-ray intensity generated in a sample. The backscattering coefficient, which varies significantly with atomic number, leads to a loss of beam electrons, affecting X-ray production. For instance, in an aluminum-in-gold system, gold's higher backscattering coefficient results in underrepresentation of aluminum X-rays compared to a pure aluminum standard. Additionally, energy loss due to inelastic scattering is influenced by atomic number, with low-Z elements removing energy more efficiently than high-Z elements.<br><br> 

The depth-dependent X-ray generation function, φ(ρz), normalizes X-ray production by mass depth and is essential for understanding intensity distributions in different materials. The atomic number correction, Zi, is derived from the ratio of generated X-ray intensities in the specimen to those in a standard, inherently incorporating R and S effects. This correction is particularly crucial for multi-element samples, ensuring accurate compositional analysis. <br><br>

•	<b>Absorption Effect (A) :</b> Since X-rays must pass through a certain depth before reaching the detector, absorption follows an exponential decay law, where deeper-generated X-rays are more likely to be absorbed. The absorption path length <b>(PL)</b> depends on the take-off angle <b>(ψ)</b> and depth <b>(z)</b>, following <b>PL = z csc ψ</b>, meaning higher ψ reduces absorption. The absorption correction factor <b>(A)</b> is applied using <b>I/I₀ = exp[-(μ/ρ)(ρt)]</b>, where <b>I/I₀</b> represents emitted vs. generated X-rays, and <b>μ/ρ</b> is the mass absorption coefficient, which varies significantly by element. Light elements like <b>C, N,</b> and <b>O</b> experience severe absorption, requiring a lower <b>E₀</b> (below 10 keV) to ensure measurable emissions. <br><br> 

•	<b>Fluorescence Effect (F) :</b>  Photoelectric absorption ionizes inner atomic shells, leading to the emission of characteristic X-rays, which can induce secondary fluorescence if another element in the sample has a lower critical excitation energy. This effect is observed in the Fe-Ni system, where Ni Kα radiation (7.478 keV) excites Fe K radiation (7.11 keV), causing additional Fe fluorescence, contributing about 25% to Fe Kα intensity in a 10 wt% Fe – 90 wt% Ni alloy. The fluorescence correction factor Fi is generally minor in quantitative X-ray analysis but is considered in ZAF corrections alongside atomic number (Z) and absorption (A) effects. <br><br> 

Without these corrections, raw intensity measurements would be misleading, particularly for multi-element samples. A schematic diagram illustrating the effect of ZAF correction—showing intensity values before and after correction—would provide a clearer understanding of its impact. <br><br>

<b>Procedure for ZAF Correction : </b> <br> <br>

1.	Calibration: X-ray spectra are first collected from standard samples with known compositions. These provide reference intensities and ZAF values.<br>
2.  K-Ratio Calculation: The ratio of X-ray intensity between the unknown sample and a standard is calculated :<br>
<img src="images\img_2.png"><br>

3.  First Iteration: The concentration Ci is initially assumed to be linearly proportional to intensity. If deviations occur, ZAF corrections are applied iteratively.<br>
4.	Iterative Correction :<br>
•	Using initial C<sub>i</sub>, a new set of ZAF values is computed.<br>
•	The updated ZAF values are applied to refine the concentration estimate.<br>
•	This process repeats until C<sub>i</sub> stabilizes, meaning further iterations produce negligible changes, as shown in figure 2.<br>
5.	Final Composition Mapping : Once convergence is achieved, the corrected element concentrations are reported. This process is repeated for each sample.<br> 

<img src="images\img_3.png"><br>













<!-- EPMA or Electron probe microanalyzer is one of the characterisation equipment used to analyse the precise composition of samples using WDS or wavelength dispersive x-ray spectroscopy technique. This technique involves the generation of X-rays by bombarding the electrons with the unknown sample, these x-rays then columnated and diffracted through known crystals d-spacing and finally collected by the detector. This whole setup is arranged on a goniometer and the distance between the sample, diffracting crystal and detector, diffracting crystal must be the same. The goniometer arrangement is shown in Figure 1. <br>

<image src="images\Picture1.png"><br>
To acquire characteristic X-ray spectra over a wide wavelength range, the spectrometer system contains a certain number of analyzing crystals with different lattice spacings. These analyzing crystals are used properly according to the wavelength range to be analyzed because to satisfy Bragg condition for diffraction there should be a near-perfect correlation between the characteristic X-ray generated and the Lattice d-spacing of the diffracting crystal. The Typical analyzing crystals that are used in a spectrometer are as follows. (1) Small lattice spacing: lithium fluoride (LiF(200) ), spacing: 0.4 nm, has an element range from Ca to Ge, (2) Medium lattice spacing: pentaerythritol (PET(002)), spacing: 0.87 nm, has element range from Si to Ti, and (3) Large spacing: thallium acid phthalate (TAP(100)), spacing: 2.6 nm, has element range from O to Al, and LSM80E with 2d spacing 7.8nm has element range from B to O. Once the characteristic X-rays get diffracted from a selective crystal are collected by a detector (CCD detector).</span>The detector collects the X-ray spectrum and converts it into a textual graph which shows chemical composition. To quantify the chemical composition from unknown sample spectra, calibration of standard samples and the ZAF correction, atomic number factor(Z), Absorption faction (A) and Fluorescence factor (F), factors correction to be performed on collected spectra of the unknown sample is required. The atomic number factor (Z) arises due to the different elements present in the unknown sample, depending on the atomic number and the penetration factor of those elements, the X-ray generation and X-rays collected at the detector vary. The PbS system when analyzed has more X-rays of Pb collected at the detector rather than in equal proportions with S. The absorption factor arises due to the absorption of X-rays created in the unknown sample by heavier elements. This scenario can be readily observed if light and heavy elements are present simultaneously in the unknown sample. The fluorescence factor is due to the generation of X-rays from one element due to X-ray absorption from another element with different atomic numbers in the same sample itself. These factors must be considered to get the unknown sample's chemical composition. The x-ray spectra is first collected from the known composition or calibration alloys followed by finding the ZAF values of those samples. The calibration data and X-ray spectra from known samples is analysed as follows, Initially, X-ray intensity is assumed to be linearly related to the concentration of an element. If there are any deviations from linear deviation ZAF factors are used. The corrected equation by using ZAF factors is shown in equation 1,<br>
<image src="images\Picture2.png"><br>
where I<sub>i</sub> is the X-ray intensity of element i, k<sub>i</sub> is the K-ratio, the ratio of X-ray intensities between an unknown sample and a standard, C<sub>i</sub> is the concentration of element i and B<sub>i</sub> is the background intensity of element i. These factors are adjusted to determine the concentration of the element in the unknown sample.  The ZAF model iteratively adjusts these corrections until the data reaches a consistent value, ensuring accurate and precise results and the same iteration is shown in Figure 2. Initially, the k<sub>i</sub> is found followed by multiplying with known sample ZAF values to get a new set of ZAF values. The concentration related to those ZAF factors is calculated followed by calculating the k<sub>i</sub> value from the first iteration C<sub>i</sub>, again a new set of ZAF values is found. This iteration continues till the C<sub>i</sub> value does not change further with iteration steps. This concentration map is then reported as the final composition of element i in an unknown sample, shown in Figure 3. This whole process is repeated for all the samples.<br>

<image src="images\Picture3.png"><br>

<image src="images\Picture4.png"><br> --!>


