-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.19-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS yordas_group_db;

USE yordas_group_db;

-- Dumping structure for table yordas_group_db.reach_svhc_candid_substances
CREATE TABLE IF NOT EXISTS `reach_svhc_candid_substances` (
  `id` int(11) DEFAULT NULL,
  `related_information` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table yordas_group_db.reach_svhc_candid_substances: ~15 rows (approximately)
/*!40000 ALTER TABLE `reach_svhc_candid_substances` DISABLE KEYS */;
INSERT INTO `reach_svhc_candid_substances` (`id`, `related_information`) VALUES
	(1, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Carcinogenic (Article 57a); Mutagenic (Article 57b)'),
	(2, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Carcinogenic (Article 57a)'),
	(3, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Toxic for reproduction (Article 57c)'),
	(4, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Carcinogenic (Article 57a); Toxic for reproduction (Article 57c)'),
	(5, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Carcinogenic (Article 57a); Toxic for reproduction (Article 57c)'),
	(6, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Carcinogenic (Article 57a); Toxic for reproduction (Article 57c)'),
	(7, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Carcinogenic (Article 57a); Toxic for reproduction (Article 57c)'),
	(9, 'Substance included on the Candidate List as of 15/12/2010. Reason for inclusion: Toxic for reproduction (Article 57c)'),
	(18, 'Substance included on the Candidate List as of 30/03/2010. Reason for inclusion: Carcinogenic (Article 57a); Mutagenic (Article 57b)'),
	(19, 'Substance included on the Candidate List as of 28/10/2008. Reason for inclusion: Carcinogenic (Article 57a)'),
	(20, 'Substance included on the Candidate List as of 28/10/2008. Reason for inclusion: Toxic for reproduction (Article 57c)'),
	(21, 'Substance included on the Candidate List as of 28/10/2008. Reason for inclusion: Equivalent level of concern having probable serious effects to the environment (Article 57f); Toxic for reproduction (article 57c)'),
	(22, 'Substance included on the Candidate List as of 28/10/2008. Reason for inclusion: Toxic for reproduction (Article 57c)'),
	(23, 'Substance included on the Candidate List as of 28/10/2008. Reason for inclusion: PBT (Article 57d); vPvB (Article 57e)'),
	(24, 'Substance included on the Candidate List as of 28/10/2008. Reason for inclusion: PBT (Article 57d)');
/*!40000 ALTER TABLE `reach_svhc_candid_substances` ENABLE KEYS */;

-- Dumping structure for table yordas_group_db.substances
CREATE TABLE IF NOT EXISTS `substances` (
  `id` int(11) NOT NULL DEFAULT 0,
  `ec_number` char(50) DEFAULT NULL,
  `cas_number` char(255) DEFAULT NULL,
  `substance_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table yordas_group_db.substances: ~50 rows (approximately)
/*!40000 ALTER TABLE `substances` DISABLE KEYS */;
INSERT INTO `substances` (`id`, `ec_number`, `cas_number`, `substance_name`) VALUES
	(1, '215-607-8', '1333-82-0', 'Chromium (VI) trioxide; Trioxochromium; Chromium oxides'),
	(2, '231-801-5; 236-881-5', '7738-94-5; 13530-68-2', 'Acids generated from chromium trioxide and their oligomers (chromic acid and dichromic acid); Chromic acid'),
	(3, '203-713-7', '109-86-4', '2-Methoxyethanol; Ethylene glycol monomethyl ether (EGME)'),
	(4, '200-755-8', '71-48-7', 'Cobalt di(acetate); Acetic acid, cobalt(2+) salt'),
	(5, '208-169-4', '513-79-1', 'Cobalt (II) carbonate'),
	(6, '233-402-1', '10141-05-06', 'Cobalt dinitrate; Nitric acid, cobalt(2+) salt'),
	(7, '233-334-2', '10124-43-3', 'Cobalt sulphate; Sulfuric acid, cobalt(2+) salt (1:1)'),
	(9, '203-804-1', '110-80-5', '2-Ethoxyethanol; Ethylene glycol monoethyl ether (EGEE)'),
	(18, '201-173-7', '79-06-1', 'Acrylamide; Prop-2-enamide; 2-Propenamide'),
	(19, '202-974-4', '101-77-9; 83712-44-1', '4,4\'-Diaminodiphenylmethane; 4,4\'-Methylenedianiline (MDA)'),
	(20, '201-622-7', '85-68-7', 'Benzyl butyl phthalate; Butyl benzyl phthalate (BBP); 1,2-Benzenedicarboxylic acid, bis(2-ethylhexyl) ester; 1,2-Benzenedicarboxylic acid, butyl phenylmethyl ester'),
	(21, '204-211-0', '117-81-7', 'Bis(2-ethylhexyl) phthalate; 1,2-Benzenedicarboxylic acid, butyl phenylmethyl ester; 1,2-Benzenedicarboxylic acid, bis(2-ethylhexyl) ester; Di-(2-ethylhexyl) phthalate (DEHP)'),
	(22, '201-557-4', '84-74-2', 'Dibutyl phthalate; Di-n-butyl phthalate (DBP); Diisobutyl phthalate; 1,2-Benzenedicarboxylic acid, dibutyl ester'),
	(23, '287-476-5', '85535-84-8', 'Alkanes, C10-13, chloro; Short-chain chlorinated paraffins (SCCP)'),
	(24, '204-371-1', '0120-12-7', 'Anthracene, pure'),
	(305, '214-237-4', '1116-54-7', '2,2\'-(Nitrosoimino)bisethanol; N-Nitrosodiethanolamine'),
	(355, '200-549-8', '62-75-9', 'N-Nitrosodimethylamine; Dimethylnitrosoamine (NDMA)'),
	(371, '210-698-0', '621-64-7', 'N-Nitrosodipropylamine; N-Nitrosodi-n-propylamine'),
	(731, '235-067-7', '12065-90-6', 'Pentalead tetraoxide sulphate'),
	(732, '235-380-9', '12202-17-4', 'Tetralead trioxide sulphate'),
	(733, '235-252-2', '12141-20-7', 'Trilead dioxide phosphonate'),
	(734, '273-688-5', '69011-06-09', 'Dibasic lead phthalate; [Phthalato(2-)]dioxotrilead; Lead, [1,2-benzenedicarboxylato(2-)]dioxotri-'),
	(735, '235-702-8', '12578-12-0', 'Dioxobis(stearato)trilead'),
	(736, '214-005-2', '1072-35-1', 'Lead distearate'),
	(800, '215-158-8', '1308-14-1', 'Chromium (III) hydroxide'),
	(806, '215-159-3', '1308-31-2', 'Dichromium iron tetraoxide'),
	(811, '270-148-0', '68411-78-9', 'Lead oxide (PbO), lead-contg.'),
	(812, '241-894-4', '17976-43-1', 'Cyclo-di-mu-oxo(mu-phthalato)trilead'),
	(813, '217-170-9', '1762-27-2', 'Diethyldimethylplumbane'),
	(1190, '215-160-9', '1308-38-9', 'Dichromium trioxide; Chromic Oxide; Chromium (III) oxide; C.I. 77288'),
	(1303, '231-157-5', '7440-47-3', 'Chromium (Cr)'),
	(1410, '233-245-9', '10099-74-8', 'Lead dinitrate; Nitric acid, lead(2+) salt'),
	(1437, '235-790-8', '12737-27-8', 'Chromium iron oxide'),
	(1749, '272-713-7', '68909-79-5', 'Hematite, chromium green black'),
	(7793, 'NA', 'NA', 'Nitrosamines; N-nitrosamines'),
	(11453, '-', '612-64-6', 'N-Nitrosoethylphenylamine'),
	(11454, '-', '10595-95-6', 'N-Nitrosomethylethylamine'),
	(11455, '210-366-5', '614-00-6', 'N-Nitrosomethylphenylamine'),
	(11456, '-', '59-89-2', 'N-Nitrosomorpholine'),
	(11457, '213-218-8', '930-55-2', 'N-Nitrosopyrrolidine; 1-Nitrosopyrrolidine'),
	(11458, '-', '601-77-4', 'N-Nitrosodi-i-propylamine'),
	(11459, '213-101-1', '924-16-3', 'N-Nitrosodibutylamine; N-Nitrosodi-n-butylamine (NDBA)'),
	(11460, '202-886-6', '100-75-4', 'N-Nitrosopiperidine; 1-Nitrosopiperidine'),
	(13332, '201-663-0', '86-30-6', 'Nitrosodiphenylamine; N-Nitrosodiphenylamine; Benzenamine, N-nitroso-N-phenyl-'),
	(13337, '200-226-1', '55-18-5', 'N-Nitrosodiethylamine (NDEA)'),
	(13552, '-', '4549-40-0', 'N-Nitrosomethylvinylamine'),
	(13721, '-', '60153-49-3', '3-(N-Nitrosomethylamino) propionitrile'),
	(13735, '-', '64091-91-4', '4-(N-Nitrosomethylamino)-1-(3-pyridyl)-1-butanone (NNK)'),
	(20985, '245-372-7', '22990-95-0', 'N-cyclohexyl-N-nitrosohydroxylamine, sodium salt'),
	(23404, '269-320-8', '68214-80-2', 'N-[2-[ethyl(3-methyl-4-nitrosophenyl)amino]ethyl]methanesulphonamide monohydrochloride');
/*!40000 ALTER TABLE `substances` ENABLE KEYS */;

-- Dumping structure for table yordas_group_db.tsd_list_substances
CREATE TABLE IF NOT EXISTS `tsd_list_substances` (
  `id` int(11) NOT NULL DEFAULT 0,
  `related_information` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table yordas_group_db.tsd_list_substances: ~19 rows (approximately)
/*!40000 ALTER TABLE `tsd_list_substances` DISABLE KEYS */;
INSERT INTO `tsd_list_substances` (`id`, `related_information`) VALUES
	(305, 'Yes (Prohibited CMR under Annex II, part 3, although exemptions may apply when the conditions laid down in Annex II, part 3 are met; Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(355, 'Yes (Prohibited CMR under Annex II, part 3, although exemptions may apply when the conditions laid down in Annex II, part 3 are met; Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(371, 'Yes (Prohibited CMR under Annex II, part 3, although exemptions may apply when the conditions laid down in Annex II, part 3 are met; Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(7793, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11453, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11454, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11455, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11456, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11457, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11458, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11459, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(11460, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(13332, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(13337, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(13552, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(13721, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(13735, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(20985, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)'),
	(23404, 'Yes (Prohibited nitrosamine under Annex II, part 3: prohibited for use in toys intended for use by children under 36 months or in other toys intended to be placed in the mouth if the migration of the substance is equal to or higher than 0.05 mg/kg)');
/*!40000 ALTER TABLE `tsd_list_substances` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
