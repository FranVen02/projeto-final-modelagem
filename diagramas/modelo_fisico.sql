-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: compras_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `codSell` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `buyDate` datetime NOT NULL,
  `unitPrice` float(10,2) NOT NULL,
  `appliedDiscount` int DEFAULT NULL,
  `finalPrice` float NOT NULL,
  `payment` varchar(30) NOT NULL,
  `status` varchar(40) NOT NULL,
  `usuario_id` int NOT NULL,
  `produto_id` int NOT NULL,
  `produtoCodProd` int DEFAULT NULL,
  `comprasProdutoCodProd` int DEFAULT NULL,
  `usuarioCodUser` int DEFAULT NULL,
  `comprasUsuarioCodUser` int DEFAULT NULL,
  PRIMARY KEY (`codSell`),
  KEY `usuario_id` (`usuario_id`),
  KEY `produto_id` (`produto_id`),
  KEY `produtoCodProd` (`produtoCodProd`),
  KEY `comprasProdutoCodProd` (`comprasProdutoCodProd`),
  KEY `usuarioCodUser` (`usuarioCodUser`),
  KEY `comprasUsuarioCodUser` (`comprasUsuarioCodUser`),
  CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`codUser`),
  CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`codProd`),
  CONSTRAINT `compras_ibfk_3` FOREIGN KEY (`produtoCodProd`) REFERENCES `produtos` (`codProd`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_4` FOREIGN KEY (`comprasProdutoCodProd`) REFERENCES `produtos` (`codProd`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_5` FOREIGN KEY (`usuarioCodUser`) REFERENCES `usuarios` (`codUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `compras_ibfk_6` FOREIGN KEY (`comprasUsuarioCodUser`) REFERENCES `usuarios` (`codUser`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `codProd` int NOT NULL AUTO_INCREMENT,
  `title` varchar(60) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `category` varchar(30) NOT NULL,
  `price` float(10,2) NOT NULL,
  `discountPercentage` float DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `brand` varchar(30) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`codProd`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `codUser` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(30) NOT NULL,
  `lastName` varchar(60) NOT NULL,
  `age` int NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `address` varchar(60) NOT NULL,
  `state` varchar(30) NOT NULL,
  `birthDate` datetime NOT NULL,
  PRIMARY KEY (`codUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-08-14  8:10:13
